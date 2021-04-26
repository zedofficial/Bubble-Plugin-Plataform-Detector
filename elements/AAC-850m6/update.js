function(instance, properties, context) {
  
  var description = platform.toString();
  var name = platform.name;
  var version = platform.version;
  var product = platform.product;
  var manufacturer = platform.manufacturer;
  var layout = platform.layout;
  var prerelease = platform.prerelease;
  var user_agent = platform.ua;
  
  var os = platform.os;
  var os_description = os.toString();
  var os_family = os.family;
  var os_version = os.version;
  var os_architecture = os.architecture;
  
  instance.publishState("description", description);
  instance.publishState("name", name);
  instance.publishState("version", version);
  instance.publishState("product", product);
  instance.publishState("manufacturer", manufacturer);
  instance.publishState("layout", layout);
  instance.publishState("prerelease", prerelease);
  instance.publishState("user_agent", user_agent);
  
  instance.publishState("os_description", os_description);
  instance.publishState("os_family", os_family);
  instance.publishState("os_version", os_version);
  instance.publishState("os_architecture", os_architecture);
  
}