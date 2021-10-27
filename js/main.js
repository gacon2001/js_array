var arrNum = [];

document.querySelector("#btnThemSo").onclick = function () {
  var num = +document.querySelector("#soN").value;
  arrNum.push(num);
  console.log(arrNum);
  document.querySelector("#txtThemSo").innerHTML = arrNum;
}

//!BÀI 1:
document.querySelector("#btnTongSoDuong").onclick = function () {
  var sum = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      sum += arrNum[i];
    }
  }
  console.log(sum);
  document.querySelector("#txtTongSoDuong").innerHTML =
    "Tổng số dương là : " + sum;
};

//!BÀI 2:
document.querySelector("#btnDemSo").onclick = function () {
  var count = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      count++;
    }
  }
  console.log(count);
  document.querySelector("#txtDemSo").innerHTML = "Số dương: " + count;
}

//!BÀI 3:
document.querySelector("#btnSoNhoNhat").onclick = function () {
  var n_soPhanTu = 0;
  var min = arrNum[n_soPhanTu];

  for (var i = 1; i < arrNum.length; i++) {
    console.log(arrNum[i]);
    if (min > arrNum[i]) {
      min = arrNum[i];
    }
  }
  document.querySelector("#txtSoNhoNhat").innerHTML = "Số nhỏ nhất là : " + min;
};

//!BÀI 4:
document.querySelector("#btnSoDuongNhoNhat").onclick = function () {
    // tạo 1 mảng mới chứa toàn số dương
    var mangSoDuong = [];
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) mangSoDuong.push(arrNum[i])
    }

    // tìm số nhỏ nhất trong mảng số dương
  var n_soPhanTu = 0;
  var minDuong = mangSoDuong[n_soPhanTu];

  for (var i = 0; i < mangSoDuong.length; i++) {
    console.log(mangSoDuong[i]);
    if (minDuong > mangSoDuong[i]) {
      minDuong = mangSoDuong[i];
    }
  }
  document.querySelector("#txtSoDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất là : " + minDuong;
};

//!BÀI 5:
document.querySelector("#btnSoChanLast").onclick = function () {
  var n_soPhanTu = 0;
  var chanLast = arrNum[n_soPhanTu];

  for (var i = n_soPhanTu - 1; i < arrNum.length; i++) {
    console.log(arrNum[i]);
    if (arrNum[i] % 2 == 0) {
      chanLast = arrNum[i];
    }
  }
  document.querySelector("#txtSoChanLast").innerHTML =
    "Số chẵn cuối cùng là :" + chanLast;
};

//!Bài 6:
document.querySelector("#btnDoiCho").onclick= function () {
    var viTri1= +document.querySelector("#viTri1").value;
    var viTri2= +document.querySelector("#viTri2").value;
    var newArr= [];
    for (var i=0; i<arrNum.length; i++){
        newArr.push(arrNum[i]);
    }
    for (var i=0; i <newArr.length; i++){
        var temp= newArr[i];
        newArr[i]= newArr[viTri1];
        newArr[viTri1]= newArr[viTri2];
        newArr[viTri2]= temp;
    }
    document.querySelector("#txtDoiCho").innerHTML= "Mảng sau khi đổi: "+ newArr;
}


//!BÀI 7:
document.querySelector("#btnSapXep").onclick= function () {
    var newArr= [];
    for (var i=0; i<arrNum.length; i++){
        // vòng lặp copy từ mảng cũ qua mảng mới
        newArr.push(arrNum[i]);
    }
    for (var i=0; i<newArr.length; i++){
        for (var j=0; j<newArr.length-1; j++){
            if (newArr[j] > newArr[j+1]){
                var temp= newArr[j];
                newArr[j]= newArr[j+1];
                newArr[j+1]= temp;
            }
        }
    }
    document.querySelector("#txtSapXep").innerHTML= "Mảng sau khi sắp xếp theo thứ tự tăng dần: "+ newArr;
}


//!BÀI 8:
function check_Snt(n) {
  if (n < 2) {
    return false; 
  } else if (n == 2) {
    return true;
  } else if (n % 2 == 0) {
    return false;
  } else {
    for (var i = 3; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}
document.querySelector("#btnSNTDauTien").onclick = function () {
    var sntFirst= "";
    for (var i=0; i<arrNum.length; i++){
        if (check_Snt(arrNum[i])){ 
            sntFirst += arrNum[i];
            break;// nếu gặp số ng tố: dừng vòng lặp lại nên sẽ không chạy qua những phần tử sau của mảng nữa. 
        }
    }
    document.querySelector("#txtSNTDauTien").innerHTML = "Số nguyên tố đầu tiên là: " + sntFirst;
}


//!BÀI 9: 
function check_so_nguyen(n) {
    if (Number.isInteger(n)) return true;
    else return false;
}
document.querySelector("#btnDemSoNguyen").onclick= function () {
    var count= 0;
    for (var i=0; i<arrNum.length; i++){
        if(check_so_nguyen(arrNum[i])){
           count++; 
        }
    }
    document.querySelector("#txtDemSoNguyen").innerHTML= "Số nguyên: "+ count;
}



//!BÀI 10:
function count_am() {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
      if (arrNum[i] < 0) {
        count++;
      }
    }
    console.log(count);
    return count;
}
function count_duong() {
    var count = 0;
    for (var i = 0; i < arrNum.length; i++) {
      if (arrNum[i] > 0) {
        count++;
      }
    }
    console.log(count);
    return count; 
}

document.querySelector("#btnSoSanh").onclick= function () {
    var duong = count_duong();
    var am = count_am();
    console.log(duong);
    if (duong > am){
        document.querySelector("#txtSoSanh").innerHTML= "Số dương "+ ">"+ "Số âm";
    } else if(duong < am){
        document.querySelector("#txtSoSanh").innerHTML= "Số âm "+ ">"+ "Số dương";
    } else{
        document.querySelector("#txtSoSanh").innerHTML= "Số âm "+ "="+ "Số dương";
    }
}

