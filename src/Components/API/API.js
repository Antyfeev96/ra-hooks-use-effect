export default class API {
  static async dataRequest(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  // static async detailsRequest(url) {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
