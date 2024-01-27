export class YesNo {
	static async getYesOrNo() {
		const data = await fetch('https://yesno.wtf/api')
		return data.json()
	}
}
