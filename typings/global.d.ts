export declare global {
  interface Window {
    __NEXT_DATA__: any
  }
  declare module NodeJS {
    interface Global {
      DOMParser: any
    }
  }
}
