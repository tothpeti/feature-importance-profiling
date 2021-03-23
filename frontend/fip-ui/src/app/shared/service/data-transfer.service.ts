import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAlgorithm} from '../model/algo-interface.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) {
  }

  postData(ranking: string[], algorithms: IAlgorithm[]): void {
    const data = {ranking, algorithms};

    this.http.post<{ name: string }>(
     'http://127.0.0.1:5000/',
      data
    ).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      console.log(error);
    });
  }
}
