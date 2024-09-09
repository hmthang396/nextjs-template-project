export class Storage {
  static async save(key: string, value: string): Promise<void> {
    return localStorage.setItem(key, value);
  }
  static async remove(key: string): Promise<void> {
    return localStorage.removeItem(key);
  }
  static async clear(): Promise<void> {
    return localStorage.clear();
  }
  static async get(key: string): Promise<string | null> {
    return localStorage.getItem(key);
  }
}
