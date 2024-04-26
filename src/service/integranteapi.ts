import { ApiService } from './api';
import { Integrante } from '../interface/integrante';

class IntegranteApi extends ApiService {
    static URL: string = `${ApiService.URL}/integrantes`;

    static async getIntegrantes(): Promise<Integrante[]> {
        try {
            const response = await fetch(IntegranteApi.URL);

            if (!response.ok) {
                throw new Error();
            }

            const data: Integrante[] = await response.json();

            return data;
        }
        catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export { IntegranteApi };