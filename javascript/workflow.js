try {
    var r = new sn_ws.RESTMessageV2("Ansible Test", "Default GET");
    // SITE SECTION
    r.setStringParameter("device_group", current.variables.device_group.toString());
    r.setStringParameter("rule_name", current.variables.rule_name.toString());
    r.setStringParameter("description", current.variables.description.toString());
    r.setStringParameter("tag_name", current.variables.tag_name.toString());
    r.setStringParameter("source_zone", current.variables.source_zone.toString());
    r.setStringParameter("source_ip", current.variables.source_ip.toString());
    r.setStringParameter("destination_zone", current.variables.destination_zone.toString());
    r.setStringParameter("destination_ip", current.variables.destination_ip.toString());
    r.setStringParameter("application", current.variables.application.toString());
    r.setStringParameter("action", current.variables.action.toString());
    var response = r.execute();
    var responseBody = response.getBody();
    var httpStatus = response.getStatusCode();
}
catch (ex) { var message = ex.message; }
