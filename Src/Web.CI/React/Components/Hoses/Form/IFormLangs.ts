export interface ISelectOption {
  value: string | number,
  text: string,
}

export interface ISelect {
  label: string,
  options: ISelectOption[],
}

export interface IHoseForm {
  type: ISelect,
  technician: string,
  assistant: string,
  code: string,
  date: string,
  installation: string,
  tag: string,
  detached: string,
  brand: string,
  rule: string,
  compatibleRules: string,
  fluid: string,
  gauge: string,
  workPressure: string,
  workPressureExceeds: string,
  workPressureExceedsMandatory: string,
  workPressureOverRule: string,
  length: string,
  terminal1gender: string,
  terminal1: string,
  terminal1Angle: string,
  terminal1Material: string,
  terminal1Abrasion: string,
  adapter1: string,
  adapter1Abrasion: string,
  terminal2gender: string,
  terminal2: string,
  terminal2Angle: string,
  terminal2Material: string,
  terminal2Abrasion: string,
  adapter2: string,
  adapter2Abrasion: string,
}
