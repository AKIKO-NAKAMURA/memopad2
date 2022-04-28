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
// 配列をローカルストレージに保存する

// １~31までの配列
    // optionタグの生成
//     const start = 01;
//     const end = 31;

//     let options = '';

// for (let i = start; i <= end; i++) {
//   options += "<option>" + i + "</option>"
//   console.log(options);
//   $('#select').html(options);
// };

 


// ローカルストレージ削除
$("#clear").on("click", function () {
  localStorage.removeItem("memo");
  localStorage.removeItem("memo2");

  $("#input").val("");
  // $("#text_area").val("");
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
// $("#text_area").val(data.text);
}
if (localStorage.getItem("memo2")) {
  const jsonData2 = localStorage.getItem("memo2")

  console.log(jsonData2);

   data2 = JSON.parse(jsonData2);

console.log(data2[0].title);
$("#input2").val(data2[0].title);
// $("#text_area").val(data.text);
}

   //チャート 


function displayLineChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  // console.log(data2[0].title, data[0].hizuke);
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels:data2,
      datasets: [{
        label: '体重の推移',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: data1
      },
      ],
    },
  
// options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     suggestedMin: 0,
//                 }
//             }]
//         }
//     }
   
  });
}


  //   var options = { };
  //   var lineChart = new Chart(ctx).Line(data, options);
  //   var data = {

  //       labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,],
  //       datasets: [
  //           {
  //               label: "体重の推移",
  //               fillColor: "rgba(220,220,220,0.2)",
  //               strokeColor: "rgba(220,220,220,1)",
  //               pointColor: "rgba(220,220,220,1)",
  //               pointStrokeColor: "#fff",
  //               pointHighlightFill: "#fff",
  //               pointHighlightStroke: "rgba(220,220,220,1)",
  //               data: [55,55,54,54,53,52,52,51,51,50,50,49,48,47]
  //           },
  //           {
  //               label: "My Second dataset",
  //               fillColor: "rgba(151,187,205,0.2)",
  //               strokeColor: "rgba(151,187,205,1)",
  //               pointColor: "rgba(151,187,205,1)",
  //               pointStrokeColor: "#fff",
  //               pointHighlightFill: "#fff",
  //               pointHighlightStroke: "rgba(151,187,205,1)",
  //               data: ["data"]
  //           }
  //       ]
  //   };
  //     function displayLineChart() {
  //  var ctx = document.getElementById("lineChart").getContext("2d");
  // }



function startprocess(){
  if (localStorage.getItem("memo")){
const jsonData = localStorage.getItem("memo")
console.log(jsonData);
const data = JSON.parse(jsonData);
console.log(data);
$("#input").val(data.title);
$("#text_area").val(data.text);
}
}
