This is node base application required mongodb version 6 to connect it.
<img width="671" height="407" alt="image" src="https://github.com/user-attachments/assets/81ae6b71-66cd-488b-b656-0e987379813e" />

create env file and add below.---->

MONGO_DB=65.1.110.58 (IP depend upon your serevr)----
DB_USER=admin ---
DB_PASSWD=admin123 ---
DB_NAME=NodeJs_Mastery_Course  ---
NODE_PORT=3000  ---


-------
docker run -itd -p 3000:3000 --name nodeapp --env-file .env <image_name>



