import { IAttachment } from './IAttachment';
import { IDowntime } from './IDowntime';

export interface IHose {
  Id?: number,
  Type: number,
  Date?: string | null,
  Installation?: string | null,
  Technician?: number,
  Assistant?: number,
  Code?: string,
  Tag?: string,
  DetachedCode?: string,
  Brand?: number,
  Rule?: number,
  CompatibleRules?: number[],
  Fluid?: number,
  Gauge?: number,
  WorkPressure?: number,
  WorkPressureExceeds?: boolean,
  WorkPressureExceedsMandatory?: boolean,
  WorkPressureOverRule?: number,
  Length?: number,
  Terminal1?: number,
  Terminal1Gender?: number,
  Terminal1Angle?: number,
  Terminal1Material?: number,
  Terminal1Abrasion?: number,
  Adapter1?: string,
  Adapter1Abrasion?: number,
  Terminal2?: number,
  Terminal2Gender?: number,
  Terminal2Angle?: number,
  Terminal2Material?: number,
  Terminal2Abrasion?: number,
  Adapter2?: string,
  Adapter2Abrasion?: number,
  Angle?: number,
  Radius?: number,
  Security?: boolean,
  Environment?: boolean,
  Operability?: boolean,
  Accessibility?: boolean,
  Abrasion?: boolean,
  From?: string,
  To?: string,
  Status?: boolean,
  Reason?: string,
  Recommended?: number,
  Notice?: string
  Attachements?: IAttachment[],
  Downtimes?: IDowntime[]
}
