/* ----------------------------- Animal Shelter ----------------------------- */

export class AnimalShelter {
  catQueue: { name: string; id: number }[];
  dogQueue: { name: string; id: number }[];
  private id = 0;

  constructor() {
    this.catQueue = [];
    this.dogQueue = [];
  }

  private entry = (name: string) => ({ name, id: this.id++ });

  enqueueCat(cat: string) {
    this.catQueue.push(this.entry(cat));
  }

  enqueueDog(dog: string) {
    this.dogQueue.push(this.entry(dog));
  }

  dequeueDog() {
    if (!this.dogQueue.length) return "Sorry, dog is unavailable now.";
    return this.dogQueue.shift()?.name;
  }

  dequeueCat() {
    if (!this.catQueue.length) return "Sorry, cat is unavailable now.";
    return this.catQueue.shift()?.name;
  }

  dequeueAny() {
    if (this.isEmpty()) return "Sorry, no animal available now.";
    if (!this.catQueue.length) return this.dequeueDog();
    if (!this.dogQueue.length) return this.dequeueCat();

    const nextDog = this.peekDog();
    const nextCat = this.peekCat();
    return nextCat.id < nextDog.id ? this.dequeueCat() : this.dequeueDog();
  }

  peekDog() {
    return this.dogQueue[0];
  }

  peekCat() {
    return this.catQueue[0];
  }

  isEmpty() {
    return !this.catQueue.length && !this.dogQueue.length;
  }
}
