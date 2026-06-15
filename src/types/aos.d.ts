declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
  }

  interface Aos {
    init(options?: AosOptions): void;
    refreshHard(): void;
  }

  const AOS: Aos;
  export default AOS;
}
