try {
    var r = new sn_ws.RESTMessageV2("Ansible Test", "Default GET");
    // SITE SECTION
    r.setStringParameter("src_zone", current.variables.src_zone.toString());
    r.setStringParameter("name", current.variables.name.toString());
    var response = r.execute();
    var responseBody = response.getBody();
    var httpStatus = response.getStatusCode();
}
catch (ex) { var message = ex.message; }
