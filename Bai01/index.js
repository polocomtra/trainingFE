const data = [
  {
    img: "https://media.meete.co/cache/400x0/2021/05/21/5dcdb58f-9d96-407b-999b-276ea2ec454f.png",
    voucher: "Tặng Ngay 1 Đậu Hủ Sả Ớt Với Hóa Đơn Trên 100k",
    place: "Tiệm Trà Thanh Xuân - Huỳnh Văn Bánh",
    status: false,
  },
  {
    img: "https://media.meete.co/cache/400x0/2021/05/10/c55aa8c1-0c2f-4512-80f1-302a77844c37.png",
    voucher: "Giảm 30% Các Món Trà Sữa",
    place: "TEA ME Tea&Coffee",
    status: true,
  },
  {
    img: "https://media.meete.co/cache/400x0/2021/01/15/c4e65cc4-9527-4d99-bb25-179da45e69ef.png",
    voucher: "Giảm 30% Toàn Menu HamBurger HaPi	",
    place: "Hamburger bò miếng HaPi - Vũ Huy Tấn",
    status: false,
  },
  {
    img: "https://media.meete.co/cache/400x0/2021/05/25/905e162a-8939-40c9-9d70-8b36003633b9.png",
    voucher: "89k Combo Cánh Gà Cho 2 - 3 Người ",
    place: "CHICKEN PLUS - 412 Nguyễn Thị Thập",
    status: false,
  },
];

let cartView = document.getElementById("cartView");
for (let i = 0; i < data.length; i++) {
  let hyperLinkTag = document.createElement("a");
  hyperLinkTag.href = "/";
  hyperLinkTag.classList.add("w-100");
  hyperLinkTag.style="text-decoration:none !important";
  hyperLinkTag.innerHTML = `<div class="bg-white rounded my-2 style-container">
    <div class="style-top-info">
        <img src="${
          data[i].img
        }" alt="meete" class="style-avatar mr-3 my-2 rounded">
        <div class="style-content m-3">
            <div class="d-flex align-items-center my-1 style-special ">
                <p class="none-underline">${data[i].voucher}</p>
            </div>
            <div class="d-flex align-items-center my-1 style-text ">
                <p class="none-underline">${data[i].place}</p>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center style-expireDate">
        "Ngày đặt hàng"
        "26/05/2021 - 16:00"
    </div>
    <div class="${
      data[i].status
        ? "style-success style-status-success"
        : "style-status style-statusPending"
    }">
        ${data[i].status ? "Đã dùng" : "Chưa dùng"}
    </div>
</div>`;
  cartView.appendChild(hyperLinkTag);
}
