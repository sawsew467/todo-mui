export const getColor = (priority) => {
    switch (priority) {
      case "high":
        return "error";
      case "normal":
        return "success";
      case "low":
        return "warning";
    }
  };