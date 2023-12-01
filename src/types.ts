export interface IConsoleData {
  value?: string
  dateTime: string
  type: ConsoleTypes
}

export enum ConsoleTypes {
  log = "LOG",
  err = "ERROR",
  info = "INFO",
}

export enum PyodideStatuses {
  loading,
  loaded,
  executing,
  executed,
}

interface IPyodideMessageStatus {
  type: "status"
  data: PyodideStatuses
}

interface IPyodideMessageStd {
  type: "std"
  data: IConsoleData
}

export type IPyodideMessage = IPyodideMessageStatus | IPyodideMessageStd
