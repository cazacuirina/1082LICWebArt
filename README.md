# 1082LICWebArt

#ETAPA 1 -	Specificații detaliate, planul de proiect
https://www.canva.com/design/DAFSBb2n5pY/No2uXp6My9Kkxj0kSgNoJA/edit?utm_content=DAFSBb2n5pY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
#Aici am inclus mock-up pentru interfete si structura sumara a bazei de date

#ETAPA 2 -	Serviciu RESTful funcțional
Pentru acces API: "https://localhost:3000/api/nume_tabela/params"

Am creat tabela de Utilizatori, ce stocheaza numele, emailul ("@stud.ase.ro" - student si "@ie.ase.ro" - prof), tipul(true - prof, false -  stud),  si parola (criptata - bcrypt). Requesturile posibile ce se pot face din API sunt:
-POST (/signup): crearea unui utilizator -body: numne,email,parola
-POST (/signin): logarea unui utilizator pe platforma -body: email,parola
-GET (activitati/prof/:profId): selectarea activitatilor unui profesor

Am creat tabela de Activitati, ce stocheaza denumirea, descrierea, data si ora programate, durata, codul unic de acces si codul ownerului (profesorului). Requesturile posibile ce se pot face din API sunt:
-GET (/:denumire): selectarea unei activitati dupa denumire
-POST (/creare/prof/:profId): crearea unei activitati de catre profesor - body:denumire,data,durata,descriere,codAcces
-POST (/inrolare/stud/:studId/codActivitate/:codAcces): inrolarea studentului la o activitate pe baza codului de acces

Am creat tabela de jonctiune Participanti ce realizeaza legatura dintre Utilizatorii de tip student si activitatile la care acestia se inroleaza. Requesturile posibile ce se pot face din API sunt:
-GET (activitati/stud/:studId): selectarea activitatilor unui student

Am creat tabela de Feedback, ce stocheaza data si ora si reactia (1-smiley, 2-surprised, 3-confused, 4-frowned). Requesturile posibile ce se pot face din API sunt:
-POST (/activ/:activId/stud/:studId): postarea unui feedback de catre un student -body: reactie
-GET (/activ/:activId/count): preluarea feedback-ului agregat pe momente de timp corespunzator unei activitati de catre un profesor
-GET(/activ/:activId/stud/:studId/count): preluarea feedback-ului total corespunzator unei activitati, al unui student

#CERINTE
Aplicație web acordarea de feedback continuu

#Obiectiv
Realizarea unei aplicații web care să permită acordarea de feedback continuu unei activități.
#Descriere
Aplicația trebuie să permită acordarea de feedback continuu la un curs sau seminariu.

Platforma este bazată pe o aplicație web cu arhitectură de tip Single Page Application accesibilă în browser de pe desktop, dispozitive mobile sau tablete (considerând preferințele utilizatorului).
Funcționalități (minime)
-	Ca profesor pot defini o activitate la o anumită dată, cu o descriere și un cod unic de acces la activitate. Activitatea poate fi accesată pentru o durată prestabilită de timp.
-	Ca student pot introduce un cod pentru a participa la o activitate definită. Codul este valabil pentru durata activității
-	Ca student care a accesat o activitate am acces la o interfața împarțită în 4 cadrane fiecare cu un emoticon (smiley face, frowny face, surprised face, confused face). În orice moment pot apăsa un emoticon pentru a reacționa la activate. Ca student pot să adaug oricâte instanțe de feedback.
-	Ca profesor pot vede feedback-ul continuu cu momentele de timp asociate. Feedback-ul este anonim. Feedback-ul este accesibil atât în timpul activității cât și ulterior

