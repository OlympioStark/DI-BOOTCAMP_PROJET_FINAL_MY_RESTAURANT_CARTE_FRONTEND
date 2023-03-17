import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: Array<any>, searchTxt: string ): Array<any> {
    return data.filter(getData);
        function getData(value: any, index: any){
            if(value.lastname.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 || 
              value.firstname.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1) {
                return data[index];
              }
               
        };
  };

}
