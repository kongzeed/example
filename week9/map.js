// Method `map()` เป็นฟังก์ชันที่ใช้ในภาษา JavaScript สำหรับการประมวลผลแต่ละสมาชิกในอาร์เรย์ (array) และสร้างอาร์เรย์ใหม่ที่ประกอบด้วยผลลัพธ์จากการประมวลผลนั้น ๆ โดยไม่แก้ไขอาร์เรย์เดิมในกระบวนการนี้ การใช้งาน `map()` มีรูปแบบดังนี้:

// ```javascript
// const newArray = array.map(function(currentValue, index, array) {
//   // ประมวลผลสมาชิกแต่ละตัวที่อยู่ในอาร์เรย์
//   // และส่งค่าที่ประมวลผลแล้วกลับมา
// });

 

// // หรือใช้รูปแบบ Arrow function ได้ดังนี้
// const newArray = array.map((currentValue, index, array) => {
//   // ประมวลผลสมาชิกแต่ละตัวที่อยู่ในอาร์เรย์
//   // และส่งค่าที่ประมวลผลแล้วกลับมา
// });
// ```

 

// - `currentValue`: ค่าของสมาชิกปัจจุบันที่ถูกประมวลผลในแต่ละรอบของ `map()`.
// - `index`: ดัชนีของสมาชิกปัจจุบันที่ถูกประมวลผลในแต่ละรอบของ `map()`.
// - `array`: อาร์เรย์ต้นฉบับที่ถูกเรียกใช้ `map()`.

 

// `map()` จะสร้างอาร์เรย์ใหม่ที่ประกอบด้วยผลลัพธ์จากการประมวลผลทุกสมาชิกในอาร์เรย์ต้นฉบับและส่งคืนอาร์เรย์ใหม่นี้ ตัวอย่างการใช้งาน `map()` คือ:

 

//javascript
const numbers = [1, 2, 3, 4, 5];

 

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

 

console.log(doubledNumbers); // ผลลัพธ์คือ [2, 4, 6, 8, 10]
// ```

 

// ในตัวอย่างนี้ `map()` ถูกใช้เพื่อคูณแต่ละจำนวนในอาร์เรย์ `numbers` ด้วย 2 และสร้างอาร์เรย์ใหม่ `doubledNumbers` ที่ประกอบด้วยผลลัพธ์ของการคูณแต่ละจำนวนในอาร์เรย์ต้นฉบับที่คูณด้วย 2 ตามที่กำหนดในฟังก์ชัน Arrow.

 

// อย่างไรก็ตาม, `map()` ไม่ได้เปลี่ยนแปลงอาร์เรย์ต้นฉบับเอง แต่สร้างอาร์เรย์ใหม่ที่มีการประมวลผลแล้ว ดังนั้นถ้าคุณต้องการเปลี่ยนแปลงอาร์เรย์ต้นฉบับคุณต้องใช้ `map()` และกำหนดค่าใหม่ให้กับอาร์เรย์ต้นฉบับหรือตัวแปรอื่น ๆ ตามต้องการ.