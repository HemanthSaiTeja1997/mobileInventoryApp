import { Injectable } from '@angular/core';
import { ApiListType } from 'src/app/interfaces/getApiResponse';
import { ApiList } from '../apiList/api-list';
import { ApiType } from 'src/app/utils/constants';
import { GetApiResponseService } from '../fetchApiRespone/get-api-response-service';

@Injectable({
  providedIn: 'root'
})
export class MasterApiService {
  constructor(private apiListService: ApiList,
  ) { }

  getMasterApiList(): ApiListType[] {
    return this.apiListService.apiList.filter(
      (e) => e.apiType === ApiType.MASTER
    );
  }


}
