# redesigned-octo-pancake
Cybersecurity and data privacy Logbook
 
| Date  | Used Hours | Subjects  | Output |
| ------------- | ------------- | ------------- | ------------- |
| 6.11.2024  | 1h  | Tutorial: Link to the Git repo + logbook  | Git repo + logbook started  |
| 9.11.2024  | 1h  | CCNA: Introduction to Cybersecurity Module 1  | Reading the material |
| 10.11.2024 | 1h  | CCNA: Introduction to Cybersecurity Module 2  | Reading the material |
| 10.11.2024 | 0,5h | CCNA: Introduction to Cybersecurity Module 1  | Doing the quiz |
| 10.11.2024 | 0,5h | CCNA: Introduction to Cybersecurity Module 2  | Doing the quiz |
| 10.11.2024 | 1,5h | CCNA: Introduction to Cybersecurity Module 3  | Reading the material + Doing the quiz |
| 10.11.2024 | 1,5h | CCNA: Introduction to Cybersecurity Module 4  | Reading the material + Doing the quiz |
| 10.11.2024 | 2h   | CCNA: Introduction to Cybersecurity Module 5  | Reading the material + Doing the quiz |
| 10.11.2024 | 0,5h | CCNA: Introduction to Cybersecurity Final exam  | Doing the Final exam |
| 12.11.2024 | 0,5h | Portswigger  | Creating an account + getting familiar with the material |
| 17.11.2024 | 1h  | Portswigger Lab | SQL injection vulnerability in WHERE clause allowing retrieval of hidden data |
| 18.11.2024 | 2h  | Portswigger Lab | Username enumeration via different responses |
| 19.11.2024 | 0,5h | Portswigger Lab | Unprotected admin functionality  |
| 19.11.2024 | 1h | Portswigger task  | Writing short reports for task submission |
| 23.11.2024 | 2h | Booking system phase 1  | Docker creating database |
| 24.11.2024 | 2h | Booking system phase 1  | Docker creating and testing database |
| 24.11.2024 | 4h | Booking system phase 1  | Making the registration page |
| 24.11.2024 | 2h | Booking system phase 1  | Testing the registration page and doing improvements |
| 25.11.2024 | 2h | Booking system phase 1  | ZAP vulnerability testing first try|
| 26.11.2024 | 1,5h | Booking system phase 1  | ZAP vulnerability testing second try |
| 01.12.2024 | 0,5h | Booking system phase 2  | Implementing the login-page and the index.html |
| 01.12.2024 | 1h | Booking system phase 2  | Functionality test of all three pages and tweaking the code to get them all functional |
| 01.12.2024 | 0,5h | Booking system phase 2  | Vulnerability test of login-page + struggling with ZAP as there seemed to be some issues with ZAP [report 1](index_login_registration_011224t_test1.md) |
| 01.12.2024 | 1h | Booking system phase 2  | Errors detected by ZAP: Path Traversal at "register" endpoint + SQL Injection on "register" endpoint + CSP Header not set + Missing anti-clickjacking Header + X-Content-Type-OptionsMissing |
| 01.12.2024 | 1h | Booking system phase 2  | Vulnerability test for all pages and rework of pages to increase security [report 2](index_login_registration_011224_test2.md) |
   - **Path Traversal**: Fixed by adding strict input validation.
   - **SQL Injection**: Prevented by implementing parameterized queries.
   - **Missing CSP Header**: Added CSP headers to secure content sources.
   - **Anti-clickjacking**: Added `X-Frame-Options` header.
   - **X-Content-Type-Options Missing**: Added `nosniff` header.

| 01.12.2024 | 0,5h | Booking system phase 2  | Generating reports in ZAP and updating my Git repo |
| 01.12.2024 | 0,5h | Booking system phase 2  | Generating reports in ZAP and updating my Git repo |
