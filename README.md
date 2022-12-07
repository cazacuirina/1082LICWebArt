# 1082LICWebArt

#ETAPA 1 -	Specificații detaliate, planul de proiect
https://www.canva.com/design/DAFSBb2n5pY/No2uXp6My9Kkxj0kSgNoJA/edit?utm_content=DAFSBb2n5pY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
#Aici am inclus mock-up pentru interfete si structura sumara a bazei de date

#ETAPA 2 -	Serviciu RESTful funcțional
Pentru acces API: "https://localhost:8081/api/nume_tabela/params"

Am creat tabela de Utilizatori, ce stocheaza numele, emailul ("@stud.ase.ro" - student si "@ie.ase.ro" - prof), tipul(true - prof, false -  stud),  si parola (criptata - bcrypt). Requesturile posibile ce se pot face din API sunt:
-GET : selectarea tuturor utilizatorilor
-GET (/:id): selectarea unui utilizator pe baza unui id       #DE IMPLEMENTAT SELECTIE PE BAZA DE NUME / EMAIL
-POST (/register): crearea unui utilizator 
-POST (/login): logarea unui utilizator pe platforma         #CU HEADERS
-PUT (/:id): actualizarea unui utilizator pe baza unui id
-DELETE (/:id): stergerea unui utilizator pe baza unui id

Am creat tabela de Activitati, ce stocheaza denumirea, descrierea, data si ora programate, durata, codul unic de acces (#AUTOGENERARE RANDOM?). Requesturile posibile ce se pot face din API sunt:
-GET : selectarea tuturor activitatilor
-GET (/:id): selectarea unui activitatilor pe baza unui id    #DE IMPLEMENTAT SELECTIA ACTIVITATILOR LA CARE ESTE INREGISTRAT UN ANUMIT USER +(include)array feedbacks
-POST : crearea unei activitati     # DE ELIMINAT 
-POST(/:profId) : crearea unei activitati de catre un profesor (+creare Inregistrare noua)
-POST (/:studId/:codAcces): inrolarea unui student la o anumita activitate pe baza codului de acces  (+creare Inregistrare noua)
-PUT (/:id): actualizarea unei activitati pe baza codului de acces        #VERIFICA DACA E PROFESOR
-DELETE (/:id): stergerea unei activitati pe baza codului de acces        #VERIFICA DACA E PROFESOR

Am creat tabela de Feedback, ce stocheaza data si ora si reactia (1-smile, 2-frown, 3-surprise, 4-confusion). Requesturile posibile ce se pot face din API sunt:
-GET : selectarea tuturor feedbackurilor      #DE IMPLEMENTAT SELECTIA FEEDBACKURILOR UNEI ACTIVITATI
-GET (/count) : selectarea numarului de reactii de fiecare tip    # NU MERGE SI TREBUIE PE CUANTA DE TIMP (pe min)
-GET (/:tip): selectarea tuturor feedbackurilor de un anumit tip
-POST : postarea feedbackului unui student      #VERIFICA DACA E STUDENT

Am creat tabela de Inregistrari ca tabela de legatura dintre Activitati si Utilizatori. Requesturile posibile ce se pot face din API sunt:
#DE IMPLEMENTAT GET: AllUsersForActivity si AllActivitiesForUser

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

