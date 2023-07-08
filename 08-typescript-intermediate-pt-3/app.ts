// BÀI HỌC 01: Sự khác biệt giữa types và interface
// Bài học rút ra:
// Khi sử dụng interface, nếu bị khai báo trùng tên nhau thì interface sẽ kế thừa kiểu dữ liệu của nhau
// interface IConNguoi extends INgheNghiep {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// interface INgheNghiep {
//   job: string;
// }

// const conNguoiThuNhat: IConNguoi = {

// };

// BÀI HỌC 02: Học về sự khác nhau giữa kiểu dữ liệu unknown, any, never

// unknown và any khác nhau như nào:
// const anyVariable: any = 12345;
// if (typeof anyVariable === "string") {
//   console.log(anyVariable.toLowerCase());
// } else if (typeof anyVariable === "number") {
//   console.log(anyVariable.toFixed(2));
// }

// const unknownVariable: unknown = 200;
// if (typeof unknownVariable === "string") {
//   console.log(unknownVariable.toLowerCase());
// } else if (typeof unknownVariable === "number") {
//   console.log(unknownVariable.toFixed(2));
// }
// Sử dụng never khi function của bạn sẽ trả ra lỗi hoặc không bao giờ chạy tới hồi kết
// function traVeLoi(err: string): never {
//   throw new Error(err);
// }

// function vongLapVoTan(): never {
//   while (true) {
//     console.log("Nam is thu sinh");
//   }
// }
