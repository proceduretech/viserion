
import * as probot from 'probot'

export = async (context: probot.Context) => {
    if(context.payload.repository.master_branch=== context.payload.ref.split("/")[2])
      context.log("Its Master Push yeh");
  };