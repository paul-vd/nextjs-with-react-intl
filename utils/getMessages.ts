const getMessages = async (locale: string) => {
  try {
    return require(`../lang/${locale}.json`)
  } catch (error) {
    console.error(error)
    return require(`../lang/en.json`)
  }
}

export default getMessages
