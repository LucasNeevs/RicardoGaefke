﻿using System;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyApp.Email;
using MyApp.Domain;

namespace MyApp.WebJob.Email
{
    class Program
    {
        public static async Task Main(string[] args)
        {
            Secrets.ConnectionStrings myConfig = new Secrets.ConnectionStrings();
            
            var builder = new HostBuilder()
            .ConfigureAppConfiguration((hostingContext, config) =>
            {
                config.AddJsonFile("appsettings.json", optional: true);
                config.AddEnvironmentVariables();
            })
            .ConfigureServices((hostContext, services) =>
            {
                services.AddSingleton<IJobActivator>(new MyJobActivator(services.BuildServiceProvider()));
                services.AddTransient<Functions, Functions>();
                services.AddSingleton<IMyEmail, MyEmail>();
                services.Configure<Secrets.ConnectionStrings>(hostContext.Configuration.GetSection("CUSTOMCONNSTR_ConnectionStrings"));
                
                hostContext.Configuration.GetSection("CUSTOMCONNSTR_ConnectionStrings").Bind(myConfig);

                services.AddOptions();
            }).ConfigureWebJobs(b =>
            {
                b.AddAzureStorageCoreServices();
                b.AddAzureStorage();
            })
            .ConfigureLogging((context, b) =>
            {
                b.AddConsole();
                string instrumentationKey = context.Configuration["APPINSIGHTS_INSTRUMENTATIONKEY"];
                if (!string.IsNullOrEmpty(instrumentationKey))
                {
                    b.AddApplicationInsights(o => o.InstrumentationKey = instrumentationKey);
                }
            })
            .UseConsoleLifetime();

            var host = builder.Build();
            
            using (host)
            {
                await host.RunAsync();
            }
        }
    }

  public class MyJobActivator : IJobActivator
  {
    private readonly IServiceProvider _serviceProvider;

    public MyJobActivator(IServiceProvider serviceProvider)
    {
      _serviceProvider = serviceProvider;
    }

    public T CreateInstance<T>()
    {
      object instance = _serviceProvider.GetService(typeof(T));
      return (T)instance;
    }
  }
}
