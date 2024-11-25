type SurveyType = "satisfaction" | "environment" | "usage";

// Судалгааны анги
export class AC {
  constructor(public type: SurveyType, public count: number = 0) {}

  start(): void {
    console.log(`${this.type} судалгаа эхэллээ.`);
  }

  stop(): void {
    console.log(`${this.type} судалгаа зогслоо.`);
  }

  increment(): void {
    this.count++;
    console.log(`${this.type} судалгааны оролцогчдыг нэмэгдүүллээ. Одоо: ${this.count}`);
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
      console.log(`${this.type} судалгааны оролцогчдыг хорогдууллаа. Одоо: ${this.count}`);
    } else {
      console.log(`${this.type} судалгаанд хорогдох оролцогч байхгүй.`);
    }
  }

  markAsTop(): void {
    console.log(`${this.type} судалгааг хамгийн шилдэг гэж тодорхойллоо.`);
  }
}