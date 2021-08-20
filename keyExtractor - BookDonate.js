keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <Icon
            name={"open-in-new"}
            type={"material-icons"}
            size={30}
            color={"#6fc0b8"}
            containerStyle={{
              width: 100,
              alignItems: "flex-end"
            }}
            onPress={() => {
              this.props.navigation.navigate("RecieverDetails", {
                details: item
              });
            }}
          />
        }
        bottomDivider
      />
    );
  };
