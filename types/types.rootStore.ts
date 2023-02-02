export interface ICssVars {
  [key: string]: {
    panelBgColor: string
    panelBgImg: string
  }
}
export interface IRootStore {
  validatorLocale: string
  cssVars: ICssVars
}
