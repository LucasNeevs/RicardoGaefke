using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using MyApp.Email;
using MyApp.Domain;

namespace Web.Site.Controllers
{
  [Route("api/email")]
  [ApiController]
  public class EmailController: ControllerBase
  {
    private readonly MyEmail _myEmail;

    public EmailController(MyEmail MyEmail)
    {
      _myEmail = MyEmail;
    }

    [HttpGet]
    public async Task<ActionResult<string>> SendEmail()
    {
      try
      {
        Address myAddress = new Address("Ricardo Gaefke", "ricardogaefke@gmail.com");

        List<Address> myTo = new List<Address>();
        myTo.Add(myAddress);

        Emails myMsg = new Emails("Ricardo Gaefke, Contact", myTo, "Mensagem a ser <strong>enviada</strong>");

        return await _myEmail.SendMail(myMsg);
      }
      catch (System.Exception ex)
      {
          return ex.Message + " - " + ex.StackTrace;
      }
    }
  }
}