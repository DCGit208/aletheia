type Listener = () => void;

export function createClientStore<T>(read: () => T, write: (value: T) => void) {
  let snapshot = read();
  const listeners = new Set<Listener>();

  return {
    subscribe(listener: Listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot() {
      return snapshot;
    },
    getServerSnapshot() {
      return snapshot;
    },
    set(value: T) {
      snapshot = value;
      write(value);
      listeners.forEach((listener) => listener());
    },
    refresh() {
      snapshot = read();
      listeners.forEach((listener) => listener());
    },
  };
}
