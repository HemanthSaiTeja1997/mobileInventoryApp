import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addIcons } from 'ionicons';
import { lockClosed, people } from 'ionicons/icons'
import { IonContent, IonIcon, IonTitle, IonInputPasswordToggle, IonList, IonItem, IonInput, IonButton, IonNote, IonRow, IonCol } from '@ionic/angular/standalone';
import { Apiservice } from 'src/app/services/apiservice/apiservice';
import { environment } from 'src/environments/environment';
import { Toastservice } from 'src/app/services/toast/toastservice';
import { Alertservice } from 'src/app/services/alertservice/alertservice';
import { loginRespone } from 'src/app/interfaces/loginrespone.interface';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { NavController } from '@ionic/angular';
import { Progressbar } from 'src/app/services/progressbar/progressbar';
import { BehaviorSubject, take } from 'rxjs';
import { HttpMethod, LOGIN_CONSTANTS, LOGIN_MESSAGES, ORGANIZATION_CONSTANTS, ROUTES, ToastColor, ToastPosition } from 'src/app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, IonInputPasswordToggle, CommonModule, FormsModule, IonInput, IonList, IonItem, IonInput, IonIcon, ReactiveFormsModule, IonButton, IonNote, IonRow, IonCol]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginActiveUsers: any;
  defaultOrgId!: number;
  responsibilities: any[] = [];

  constructor(private fb: FormBuilder, private navCltr: NavController, private nprogress: Progressbar, private sqlite: Sqliteservice, private apiservice: Apiservice, private toastService: Toastservice, private alertMessage: Alertservice) {
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
      this.toastService.presentToast(ToastPosition.TOP, ToastColor.DANGER, LOGIN_MESSAGES.LOGIN_INVALID_MESSAGE);
      return;
    }
    this.nprogress.progressBar("Loading...", 3000, "circular")
    this.apiservice.apiRequest<loginRespone>(HttpMethod.POST, `${environment.baseUrl}${LOGIN_CONSTANTS.API_ENDPOINT}`, this.loginForm.value).subscribe({
      next: async (data: loginRespone) => {
        this.nprogress.dismiss();

        if (data?.data[0]?.STATUS === '0') {
          await this.alertMessage.presentAlert(data?.data[0]?.ERROR);
        } else {
          await this.sqlite.createTable(LOGIN_CONSTANTS.TABLE_NAME, data?.metadata);
          //create login tabel
          await this.sqlite.registerLoginUsers(LOGIN_CONSTANTS.TABLE_NAME, data?.data);
          this.sqlite.loginusers$.pipe(take(1)).subscribe({
            next: (res) => {
              this.loginActiveUsers = res.filter((item: { DEFAULT_ORG_ID: string | null; }) => item.DEFAULT_ORG_ID != null && item.DEFAULT_ORG_ID !== "");
              this.defaultOrgId = res.find((item: { DEFAULT_ORG_ID: string | null; }) => item.DEFAULT_ORG_ID !== null && item.DEFAULT_ORG_ID !== "")?.DEFAULT_ORG_ID;
              localStorage.setItem("orgId", String(this.defaultOrgId));

              this.responsibilities = [...new Set(
                this.loginActiveUsers.map((user: { RESPONSIBILITY: string }) => user.RESPONSIBILITY)
              )];
              localStorage.setItem("responsibility", JSON.stringify(this.responsibilities));
              console.log("responsibilityfromLocalStroage", localStorage.getItem('responsibility'));
              console.log("loginUsers", this.defaultOrgId);
            }
          });
          // create organization tabel
          this.apiservice.apiRequest(HttpMethod.GET, `${environment.baseUrl}${ORGANIZATION_CONSTANTS.API_ENDPOINT}/${this.defaultOrgId}`).pipe(take(1)).subscribe({
            next: async (res) => {
              const respones = res as any[][];
              if (respones && Array.isArray(respones) && respones.length > 0 && typeof respones[0] === 'object') {
                await this.sqlite.createOrganizationTable(ORGANIZATION_CONSTANTS.TABLE_NAME, respones);
              }
            }
          })
          this.navCltr.navigateForward([ROUTES.ORGANIZATION, Number(localStorage.getItem('orgId'))]);
        }

      },
      error: async (err) => {
        this.toastService.presentToast(ToastPosition.TOP, ToastColor.DANGER, LOGIN_MESSAGES.LOGIN_FAILED_MESSAGE);
      }
    })

  }

}
