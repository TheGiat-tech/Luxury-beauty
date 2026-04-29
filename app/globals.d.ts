declare module '*.css' {
  const content: Record<string, any>;
  export default content;
}

interface Window {
  pintrk: (...args: unknown[]) => void
}
