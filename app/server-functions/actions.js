"use server"

export const checkText = async (prevState, formData) => {
    const text = formData.get("myText")
    if (!text) {
        return {
            error: "必須項目です。テキストを入力してください",
        }
    }
    if (text.length > 10) {
        return {
            error: "テキストは１０文字以下で入力してください",
        }
    }
    return {
        success: `入力されたテキスト「${text}」は正しいです`,
    }
}