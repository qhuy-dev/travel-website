let u = document.getElementById("user");
      let p = document.getElementById("pass");
      let ht = document.getElementById("hoTen");
      let sodt = document.getElementById("sdt");
      function check(so) {
        var hoTen = ht.value;
        var sdt = sodt.value;
        var user = u.value;
        var pass = p.value;
        var tht = /^[a-zA-Z ]+$/;
        var tsdt = /^[0-9]{10}$/;
        var tuser = /^[\S]+$/;
        var tpass = /^[\S]+$/;
        switch (so) {
          case 1: {
            if (tht.test(hoTen)) {
              document.getElementById("1").textContent = "";
            } else {
              document.getElementById("1").textContent = "*";
            }
            break;
          }
          case 2: {
            if (tsdt.test(sdt)) {
              document.getElementById("2").textContent = "";
            } else {
              document.getElementById("2").textContent = "*";
            }
            break;
          }
          case 3: {
            if (tuser.test(user)) {
              document.getElementById("3").textContent = "";
            } else {
              document.getElementById("3").textContent = "*";
            }
            break;
          }
          case 4: {
            if (tpass.test(pass)) {
              document.getElementById("4").textContent = "";
            } else {
              document.getElementById("4").textContent = "*";
            }
            break;
          }
          case 5: {
            if (
              tht.test(hoTen) &&
              tsdt.test(sdt) &&
              tuser.test(user) &&
              tpass.test(pass)
            ) {
              alert("Đăng ký thành công!");
              document.getElementById("dongdk").click();
            } else {
              alert("Vui lòng điền đúng thông tin!");
            }
            break;
          }
        }
      }
      function dangNhap() {
        var userold = u.value;
        var passold = p.value;
        var userdn = document.getElementById("userdn").value;
        var passdn = document.getElementById("passdn").value;
        if (userdn === userold && passdn === passold && ht.value !== "") {
          localStorage.setItem("username", userdn);
          localStorage.setItem("password", passdn);
          localStorage.setItem("hoTen", ht.value);
          localStorage.setItem("sdt", sodt.value);
          document.getElementById("dongdn").click();
          taoUser();
        } else {
          alert("Sai thông tin đăng nhập!");
        }
      }
      function taoUser() {
        document.getElementById("nutdn").remove();
        document.getElementById("nutdk").remove();
        var menu = document.getElementById("menubar");
        const li = document.createElement("li"); // tạo li gắn với menu
        li.className = "nav-item dropdown";
        const a = document.createElement("a");
        a.className = "nav-link dropdown-toggle";
        a.href = "#";
        a.role = "button";
        a.dataset.bsToggle = "dropdown";
        const anh = document.createElement("img");
        anh.src = "../assets/images/avatar.jpg";
        anh.style = "width: 50px;";
        anh.className = "rounded-pill";
        a.appendChild(anh);
        li.appendChild(a);
        const ul = document.createElement("ul");
        ul.className = "dropdown-menu";
        ul.style =
          "background: linear-gradient(45deg,white, rgb(33, 147, 176), rgb(109, 213, 237),white);color: white;";
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const a1 = document.createElement("a");
        const a2 = document.createElement("a");
        const a3 = document.createElement("a");
        const a4 = document.createElement("a");
        a1.className = "dropdown-item";
        a2.className = "dropdown-item";
        a3.className = "dropdown-item";
        a4.className = "dropdown-item";
        a1.href = "#";
        a2.href = "#";
        a3.href = "#";
        a4.href = "#";
        a1.textContent = "THÔNG TIN CÁ NHÂN";
        a2.textContent = "GIỎ HÀNG";
        a3.textContent = "ĐƠN HÀNG";
        a4.textContent = "ĐĂNG XUẤT";
        a4.onclick = function () {
          var flag = confirm("Bạn có chắc muốn đăng xuất?");
          if (flag) {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            localStorage.removeItem("hoTen");
            localStorage.removeItem("sdt");
            location.reload();
          }
        };
        li1.appendChild(a1);
        li2.appendChild(a2);
        li3.appendChild(a3);
        li4.appendChild(a4);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        li.appendChild(ul);
        menu.appendChild(li);
      }
      window.onload = function () {
        var userold = localStorage.getItem("username");
        var passold = localStorage.getItem("password");
        var ht = document.getElementById("ht");
        var sdt = document.getElementById("sdt");
        if (userold && passold) {
          taoUser();
        }
      };
      function xemTour(ten, hinh, mota, gia) {
        document.getElementById("tenTour").innerText = ten;
        document.getElementById("hinhTour").src = hinh;
        document.getElementById("moTaTour").innerText = mota;
        document.getElementById("giaTour").innerText = gia;

        let modal = new bootstrap.Modal(document.getElementById("modalTour"));
        modal.show();
      }