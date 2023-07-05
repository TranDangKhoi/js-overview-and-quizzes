// Bài học thứ nhất: Optional Field/Optional Property in Typescript => Giá trị của một trường có thể có hoặc không
// const student: {
//   name: string;
//   age: number;
//   school?: string;
// } = {
//   name: "Khoi",
//   age: 20,
//   school: "FPTU",
// };

// Bài học thứ hai: Kiểu dữ liệu mảng trong Typescript
// const arr: number[] = [4, 5, 7, 1];

// Bài học thứ ba: Union Type => một biến hoặc một trường có thể có nhiều kiểu dữ liệu
// vertical bar: |
// const person: {
//   phoneNumber: string | number;
// } = {
//   phoneNumber: 48394893489,
// };

// const randomArr: (string | number | boolean)[] = [true, "123", 123, "Khoi"];
// const unionVariable: string | number = 123;

// const people: {
//   name: string;
//   age: number;
//   school?: string;
// }[] = [
//   {
//     name: "Khoi",
//     age: 20,
//   },
//   {
//     name: "Nam",
//     age: 20,
//   },
//   {
//     name: "Viet",
//     age: 99,
//   },
// ];

// Bài tập 5: Sử dụng Type và Interface

// type ConNguoi = {

// };

interface ConNguoi {
  name: string;
  laDuCon: boolean;
  thongMinhKietXuat: boolean;
}

const thangThuNhat: ConNguoi = {
  name: "Khoi",
  laDuCon: false,
  thongMinhKietXuat: true,
};

const thangThuHai: ConNguoi = {
  name: "Nam",
  laDuCon: true,
  thongMinhKietXuat: true,
};

const thangThuBa: ConNguoi = {
  name: "Minh",
  laDuCon: false,
  thongMinhKietXuat: false,
};
