import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addIcons } from 'ionicons';
import { lockClosed, people } from 'ionicons/icons'
import { IonContent, IonIcon, IonTitle, IonList, IonItem, IonInput, IonButton, IonNote, IonRow, IonCol } from '@ionic/angular/standalone';
import { Apiservice } from 'src/app/services/apiservice/apiservice';
import { environment } from 'src/environments/environment';
import { Toastservice } from 'src/app/services/toast/toastservice';
import { Alertservice } from 'src/app/services/alertservice/alertservice';
import { loginRespone } from 'src/app/interfaces/loginrespone.interface';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, CommonModule, FormsModule, IonInput, IonList, IonItem, IonInput, IonIcon, ReactiveFormsModule, IonButton, IonNote, IonRow, IonCol]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginActiveUsers:any;
  defaultOrgId! :number;
  constructor(private fb: FormBuilder,private sqlite:Sqliteservice, private apiservice: Apiservice, private toastService: Toastservice,private alertMessage:Alertservice) {
    this.loginForm = this.fb.group({
      username: ['Manideep J', Validators.required],
      password: ['Propel@123', Validators.required]
    })
    addIcons({
      people,
      lockClosed
    })
  }

  ngOnInit() {
  }
  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toastService.presentToast('top', 'danger', 'Please fill all required fields');
      return;
    }
    this.apiservice.apiRequest<loginRespone>("POST", environment.loginurl, this.loginForm.value).subscribe({
      next: async(data:loginRespone) => {
        if(data?.data[0]?.STATUS === '0'){
        await  this.alertMessage.presentAlert(data?.data[0]?.ERROR);
        }else{
          await this.sqlite.createLoginTable("loginDatabase","loginUser",data?.metadata);
          await this.sqlite.registerLoginUsers("loginUser",data?.data);
          await this.sqlite.loginusers$.subscribe({
            next:(res)=>{
this.loginActiveUsers=res.filter((item: { DEFAULT_ORG_ID: string | null; }) => item.DEFAULT_ORG_ID != null && item.DEFAULT_ORG_ID !== "");
this.defaultOrgId = res.find((item: { DEFAULT_ORG_ID: string | null; }) => item.DEFAULT_ORG_ID !== null && item.DEFAULT_ORG_ID !== "")?.DEFAULT_ORG_ID;
console.log("loginUsers",this.defaultOrgId);
            }
          })


        }

      }
    })

  }

}
