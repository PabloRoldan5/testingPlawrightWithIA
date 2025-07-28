import { request,test, expect } from '@playwright/test';

test('dragon ball api test', async ({ page }) => {
    const apiContext = await request.newContext();
    const response = await apiContext.get('https://dragonball-api.com/api/characters/1');
    const data = await response.json();
    console.log(data);
    expect(data.name).toBe('Goku'); 
    console.log('data:', data);
   
    });
