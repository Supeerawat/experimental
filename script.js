// ฟังก์ชันสำหรับสุ่มเลือกสี HEX
function getRandomColor() {
    // '0123456789abcdef' คือตัวเลขและตัวอักษรสำหรับรหัสสี HEX
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // สุ่มเลือกตัวอักษร 6 ตัว
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 1. เลือกปุ่มจาก HTML โดยใช้ ID
const button = document.getElementById('colorButton');

// 2. กำหนดเหตุการณ์ (Event Listener) เมื่อมีการคลิกปุ่ม
button.addEventListener('click', () => {
    // 3. เมื่อคลิก ให้เรียกใช้ฟังก์ชันเปลี่ยนสี
    const newColor = getRandomColor();
    
    // 4. เปลี่ยนสีพื้นหลังของ <body>
    document.body.style.backgroundColor = newColor;
});
