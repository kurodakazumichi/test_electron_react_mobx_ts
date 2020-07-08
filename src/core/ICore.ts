export default interface ICore {
  xxxx: () => void;
}

declare global {
  interface Window {
    core: ICore;
  }
}