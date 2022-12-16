import LoginPage from '../page/login.page'
import SecurePage from '../page/secure.page'

describe('My Login application', () => {
	it('should login with valid credentials', async () => {
		await LoginPage.open()

		await LoginPage.login('tomsmith', 'SuperSecretPassword!')
		await expect(SecurePage.flashAlert).toBeExisting()
		await expect(SecurePage.flashAlert).toHaveTextContaining(
			'You logged into a secure area!'
		)
	})
})
