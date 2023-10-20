
        document.addEventListener("DOMContentLoaded", function() {
            const tabs = document.querySelectorAll(".sidebar-tab");
            const menus = document.querySelectorAll(".menu");

            tabs.forEach(tab => {
                tab.addEventListener("click", function() {
                    const tabId = this.getAttribute("data-tab");

                    tabs.forEach(tab => {
                        tab.classList.remove("active");
                    });

                    menus.forEach(menu => {
                        menu.classList.remove("active");
                    });

                    this.classList.add("active");
                    document.querySelector(`.menu[data-tab="${tabId}"]`).classList.add("active");
                });
            });
        });

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qYmhnZ210dnRva3B6cnR2a29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwMzM4OTAsImV4cCI6MjAwNjYwOTg5MH0.05P3Bf39piFA3cW3x9ufeoqGMJUCN-gvfCVVrq1w-ac';
const DEVICE_ID = 'temp_201'; 
const SUPABASE_URL = 'https://njbhggmtvtokpzrtvkoo.supabase.co';

document.getElementById('deviceId').innerText = DEVICE_ID;

async function getLatestTemperature() {

let url = `${SUPABASE_URL}/rest/v1/temperature?device_id=eq.${DEVICE_ID}&apikey=${API_KEY}`;

// 尝试按创建时间排序
try {
url += '&order=timestamp.desc';
const res = await fetch(url);
const data = await res.json();
return data[0].value;
} catch (err) {
// 如果报错,直接取第一条
const res = await fetch(url); 
const data = await res.json();
return data[0].value; 
}

}

setInterval(async () => {
  const temp = await getLatestTemperature();
  document.getElementById('temperature').innerText = temp;
}, 5000);

//footer-popup
	// 获取元素
	const versionEl = document.querySelector('.footer-version');
	const popupEl = document.querySelector('.footer-popup');

	// 绑定点击事件
	versionEl.addEventListener('click', () => {
 	 popupEl.classList.add('show'); // 显示弹窗
  
  	setTimeout(() => {
    	popupEl.classList.remove('show'); // 3秒后隐藏
  	 }, 3000); 
	});
