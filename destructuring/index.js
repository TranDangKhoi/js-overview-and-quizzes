// Bài tập 1: Lấy ra Ken nhưng không lấy ra John sử dụng kĩ thuật Destructuring
console.log("Kết quả bài tập 1:");

const names = ["John", "Ken"];

// Code dưới này

// Bài tập 2: Cho object student1, hãy in ra 3 phần tử đầu tiên trong object sử dụng Rest Operator và Destructoring
// Cùng lúc đó, in ra các phần tử còn lại sử dụng Destructuring (sử dụng một dòng console.log duy nhất)
// Expected Output: [ 'Minh', 'Nam', 'Viet' ] FPTU HN { studentName: 'Khoi', isHandsome: 'kinda', age: 20 }
console.log("Kết quả bài tập 2:");

const student = {
  studentName: "Khoi",
  isHandsome: "kinda",
  age: 20,
  friends: ["Minh", "Nam", "Viet"],
  school: "FPTU HN",
};

// Code dưới này

// Bài tập 3: Sử dụng chính object student ở bài 2, hãy in ra các phần tử trong mảng friends sử dụng Destructuring
// Expected Output: Minh Nam Viet
console.log("Kết quả bài tập 3:");

// Code dưới này

// Bài tập 4: Cho sẵn một function dùng để in ra thông tin của student, tự khởi tạo một object mang tên myStudent có ít nhất 3 trường
// Sau đó sử dụng rest operator để truyền vào toàn bộ thông tin trong object myStudent vào function logStudentInfo
// Xử lí in ra thông tin của myStudent trong terminal
// HINT: truyền vào function logStudentInfo như sau: logStudentInfo({ ...myStudent }). Sau đó in ra myStudent.name, myStudent.age, ...v.v
console.log("Kết quả bài tập 4:");
