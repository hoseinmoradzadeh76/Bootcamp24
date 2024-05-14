const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
let date = new Date();
let date2 = new Date().toLocaleDateString("fa-IR");
let year = +p2e(date2.split("/")[0]);
let month = +p2e(date2.split("/")[1]) - 1;


const day = document.querySelector(".calendar-dates");

const currdate = document.querySelector(".calendar-current-date");

const prenexIcons = document.querySelectorAll(".calendar-navigation span");

const eventContainer = document.getElementById("event");

events = [
 "لغو امتیاز تنباکو" ,
 " روز بایگانی",
 " روز قدردانی از شوهر",
 "روز خلاقیت و نوآوری",
 "بزرگداشت شیخ بهایی",
 "روز کمک به حیوانات",
 "شهادت استاد مرتضی مطهری",
 "شهادت امام جعفر صادق (ع)",
 "روز تکنولوژی",
 "زادروز مریم میرزاخانی",
 "روز پرستار",
 " روز پسر",
 "روز نیروی هوایی",
 " روز پسر",
 "بزرگداشت حکیم عمر خیام",
 "ولادت اما رضا (ع)",
 " روز اهدای عضو، اهدای زندگی",
 "روز پرستار",
 "روز خانواده",
 " روز ارتباطات",
 "لغو امتیاز تنباکو" ,
 " روز بایگانی",
 " روز قدردانی از شوهر",
 "روز خلاقیت و نوآوری",
 " روز آشپزی",
 "شهادت امام جعفر صادق (ع)",
 "روز تکنولوژی",
 "زادروز مریم میرزاخانی",
 " پدر علم ارتباطات و روزنامه‌نگاری ایران",
 "روز نیروی هوایی",
 "ولادت حضرت معصومه (س) و روز دختر",
 " روز آشپزی",
 "شهادت امام جعفر صادق (ع)",


]

const months = [
	"فروردین",
	"اردیبهشت",
	"خرداد",
	"تیر",
	"مرداد",
	"شهریور",
	"مهر",
	"آبان",
	"آذر",
	"دی",
	"بهمن",
	"اسفند"
];
const solarMonths = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

const manipulate = () => {


	let dayone = new Date(year, month, 1).getDay();


	let lastdate = new Date(year, month + 1, 0).getDate();


	let dayend = new Date(year, month, lastdate).getDay();


	let monthlastdate = solarMonths[month];


	let lit = "";


	for (let i = dayone; i > 0; i--) {
		lit +=
			`<li class="day">${monthlastdate - i + 1}</li>`;
	}


	for (let i = 1; i <= lastdate; i++) {
		let isToday =
			i === +p2e(new Date().toLocaleDateString("fa-IR").split("/")[2]) &&
				month ===
				+p2e(new Date().toLocaleDateString("fa-IR").split("/")[1]) -
				1 &&
				year === +p2e(new Date().toLocaleDateString("fa-IR").split("/")[0])
				

		lit += `<li class="day ${isToday}">${i}</li>`;
	}


	for (let i = dayend; i < 6; i++) {
		lit += `<li class="day>${i - dayend + 1}</li>`
	}


	currdate.innerText = `${months[month]} ${year}`;


	day.innerHTML = lit;
}

manipulate();


prenexIcons.forEach(icon => {


	icon.addEventListener("click", () => {


		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		if (month < 0 || month > 11) {


			date = new Date(year, month, new Date().getDate());

			year = date.getFullYear();


			month = date.getMonth();
		}

		else {


			date = new Date();
		}


		manipulate();
	});
});


const days = document.querySelectorAll(".day");

days.forEach((d) =>
    d.addEventListener("click", function (e) {
        eventContainer.style.display = "flex";
        eventContainer.innerHTML = events[+e.target.innerHTML];

        
    })
);
