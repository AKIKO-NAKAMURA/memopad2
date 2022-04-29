 // ローカルストレージ登録
const reslut = [];
const reslut2 = [];
$("#save").on("click",function(){
  const data = $("#input").val();
  const data2 = $("#input2").val();

  // const data = {
  //   title:$("#input").val(),
  // };
  //  const data2 = {
  //   hizuke: $("#input2").val(),
  // };
  reslut.push(data);
  reslut2.push(data2);

  console.log(reslut);
  const jsonData = JSON.stringify(reslut);
    const jsonData2 = JSON.stringify(reslut2);

  console.log(jsonData);
  localStorage.setItem("memo", jsonData);
    localStorage.setItem("memo2",jsonData2);

});

// ローカルストレージ削除
$("#clear").on("click", function () {
  localStorage.removeItem("memo");
  localStorage.removeItem("memo2");

  $("#input").val("");
});
 let data1=[];
 let data2=[];

// ローカルストレージ取得
if (localStorage.getItem("memo")) {
  const jsonData = localStorage.getItem("memo")

  console.log(jsonData);

  data1 = JSON.parse(jsonData);

console.log(data1[0].title);
$("#input").val(data1[0].title);
}
if (localStorage.getItem("memo2")) {
  const jsonData2 = localStorage.getItem("memo2")

  console.log(jsonData2);

   data2 = JSON.parse(jsonData2);

console.log(data2[0].title);
$("#input2").val(data2[0].title);
}

   //チャートの描画 
function displayLineChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data2,
      datasets: [{
        label: '体重の推移',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: data1
      },
      ],
    },
  });
}

function startprocess(){
  if (localStorage.getItem("memo")){
const jsonData = localStorage.getItem("memo")
console.log(jsonData);
const data = JSON.parse(jsonData);
console.log(data);
$("#input").val(data.title);
  }
   if (localStorage.getItem("memo2")){
const jsonData2 = localStorage.getItem("memo2")
console.log(jsonData2);
const data = JSON.parse(jsonData2);
console.log(data2);
$("#input2").val(data[2].title);
}
}
