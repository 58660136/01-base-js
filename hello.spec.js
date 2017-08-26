const hello = require('./hello')
//ดึงไฟล์ hello มาใช้
test('hello function',()=>{

  // Arrange เตรียมของที่จะทดสอบ
  let nickname = 'Jame'

  // Act เรียก ฟังก์ชันมาทำงาน
  let result = hello(nickname)

  // Assert ทดสอบผลการทำงาน
  expect(result).toBe('Hello Jame')
})
