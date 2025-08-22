import { Pipe, PipeTransform } from '@angular/core';
import { Organization } from '../interfaces/loginrespone.interface';

@Pipe({
  name: 'orgsearch'
})
export class OrgsearchPipe implements PipeTransform {

  transform(organizations: Organization[], input: string): Organization[] {
    if (!organizations) return [];
    if (!input) return organizations;
    const lowerInput = input.toLowerCase();
    return organizations.filter(org => 
      org?.InventoryOrgCode?.toLowerCase().includes(lowerInput) || org?.InventoryOrgName?.toLowerCase().includes(lowerInput)
    )
  }

}
