import Board from "../../../models/Board";
import Comments from "../../../models/Comments";

export default {
  Query: {
    getAllBoard: async (_, args) => {
      try {
        const result = await Board.find().populate({
          path: `comments`,
          model: Comments,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
