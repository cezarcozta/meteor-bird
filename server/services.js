ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
        $set: {
            appId: "1176056995757302",
            secret: "36192ed7749474dd6cb1e754fd87cc7d"
        }
    }
);