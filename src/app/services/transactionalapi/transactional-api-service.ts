import { Injectable } from '@angular/core';
import { ApiListType } from 'src/app/interfaces/getApiResponse';
import { ApiList } from '../apiList/api-list';
import { ApiType } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TransactionalApiService {
  constructor(private apiListService: ApiList,
  ) { }

  getTransactionalApiList(): ApiListType[] {
    return this.apiListService.apiList.filter(
      (e) => e.apiType === ApiType.TRANSCATIONAL
    );
  }

}
