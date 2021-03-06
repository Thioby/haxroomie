window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "document",
          "haxroomi",
          "index",
          "readm",
          "tutori"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "undefined": [
          "cli",
          "config",
          "haxroomi",
          "tutori",
          "us"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_module.html": [
          "document",
          "list",
          "list:modul",
          "modul"
        ],
        "list_tutorial.html": [
          "avail",
          "list",
          "list:tutori",
          "tutori"
        ],
        "PluginController.html": [
          "class",
          "control",
          "haxbal",
          "headless",
          "hhm",
          "manag",
          "plugin",
          "plugincontrol"
        ],
        "PluginController.html#getPlugins": [
          "function",
          "getplugin",
          "load",
          "lt;async&gt",
          "plugin",
          "plugincontroller#getplugin",
          "promise.&lt;array.&lt;plugindata&gt;&gt",
          "return"
        ],
        "PluginController.html#getPlugin": [
          "function",
          "getplugin",
          "given",
          "lt;async&gt",
          "name",
          "plugin",
          "plugincontroller#getplugin",
          "plugindata",
          "promise.&lt;?plugindata&gt",
          "return"
        ],
        "PluginController.html#enablePlugin": [
          "enabl",
          "enableplugin",
          "function",
          "given",
          "hhm",
          "lt;async&gt",
          "name",
          "plugin",
          "plugincontroller#enableplugin",
          "promise.&lt;boolean&gt"
        ],
        "PluginController.html#disablePlugin": [
          "array",
          "disabl",
          "disableplugin",
          "forc",
          "function",
          "given",
          "hhm",
          "lt;async&gt",
          "name",
          "order",
          "plugin",
          "plugincontroller#disableplugin",
          "promise.&lt;boolean&gt"
        ],
        "PluginController.html#getPluginsThatDependOn": [
          "depend",
          "function",
          "get",
          "getpluginsthatdependon",
          "given",
          "list",
          "lt;async&gt",
          "name",
          "plugin",
          "plugincontroller#getpluginsthatdependon",
          "promise.&lt;array.&lt;plugindata&gt;&gt"
        ],
        "PluginController.html#hasPlugin": [
          "check",
          "function",
          "given",
          "hasplugin",
          "load",
          "lt;async&gt",
          "name",
          "plugin",
          "plugincontroller#hasplugin",
          "promise.&lt;boolean&gt",
          "room"
        ],
        "PluginController.html#addPlugin": [
          "add",
          "addplugin",
          "avail",
          "content",
          "function",
          "load",
          "lt;async&gt",
          "new",
          "plugin",
          "plugincontroller#addplugin",
          "plugindef",
          "promise.&lt;number&gt",
          "repositori",
          "string"
        ],
        "PluginController.html#setPluginConfig": [
          "avail",
          "config",
          "function",
          "given",
          "load",
          "lt;async&gt",
          "method",
          "plugin",
          "pluginconfig",
          "plugincontroller#setpluginconfig",
          "pluginnam",
          "repositori",
          "room",
          "set",
          "setpluginconfig",
          "tri",
          "unload",
          "us"
        ],
        "PluginController.html#getPluginConfig": [
          "config",
          "function",
          "getpluginconfig",
          "given",
          "load",
          "lt;async&gt",
          "plugin",
          "plugincontroller#getpluginconfig",
          "pluginnam",
          "promise.&lt;object&gt",
          "return",
          "room"
        ],
        "Haxroomie.html": [
          "anyth",
          "befor",
          "browser",
          "chrome",
          "class",
          "control",
          "creat",
          "each",
          "haxroomi",
          "headless",
          "instanc",
          "launch",
          "launchbrows",
          "manag",
          "method",
          "on",
          "requir",
          "room",
          "roomcontrol",
          "run",
          "spawn",
          "tab"
        ],
        "Haxroomie.html#launchBrowser": [
          "browser",
          "class",
          "constructor",
          "control",
          "debug",
          "function",
          "given",
          "haxroomi",
          "haxroomie#launchbrows",
          "launch",
          "launchbrows",
          "lt;async&gt",
          "on",
          "port",
          "possibl",
          "puppet",
          "remot",
          "us"
        ],
        "Haxroomie.html#closeBrowser": [
          "browser",
          "close",
          "closebrows",
          "control",
          "function",
          "haxroomie#closebrows",
          "lt;async&gt",
          "puppet"
        ],
        "Haxroomie.html#hasRoom": [
          "boolean",
          "check",
          "function",
          "given",
          "hasroom",
          "haxroomie#hasroom",
          "id",
          "room",
          "run"
        ],
        "Haxroomie.html#getRoom": [
          "function",
          "getroom",
          "given",
          "haxroomie#getroom",
          "id",
          "return",
          "roomcontrol"
        ],
        "Haxroomie.html#getRooms": [
          "array",
          "array.&lt;roomcontroller&gt",
          "avail",
          "function",
          "getroom",
          "haxroomie#getroom",
          "return",
          "roomcontrol"
        ],
        "Haxroomie.html#getFirstRoom": [
          "ad",
          "first",
          "function",
          "getfirstroom",
          "haxroomie#getfirstroom",
          "return",
          "roomcontrol"
        ],
        "Haxroomie.html#removeRoom": [
          "browser",
          "close",
          "control",
          "delet",
          "function",
          "given",
          "haxroomie#removeroom",
          "id",
          "lt;async&gt",
          "remov",
          "removeroom",
          "roomcontrol",
          "tab"
        ],
        "Haxroomie.html#addRoom": [
          "add",
          "addroom",
          "config",
          "creat",
          "function",
          "given",
          "haxroomie#addroom",
          "id",
          "lt;async&gt",
          "new",
          "roomcontrol"
        ],
        "RepositoryController.html": [
          "class",
          "control",
          "haxbal",
          "headless",
          "hhm",
          "manag",
          "repositori",
          "repositorycontrol"
        ],
        "RepositoryController.html#addRepository": [
          "ad",
          "add",
          "addrepositori",
          "append",
          "can't",
          "found",
          "function",
          "highest",
          "i.",
          "load",
          "lowest",
          "lt;async&gt",
          "new",
          "otherwis",
          "plugin",
          "prioriti",
          "promise.&lt;boolean&gt",
          "repositori",
          "repositorycontroller#addrepositori",
          "set",
          "true"
        ],
        "RepositoryController.html#getRepositories": [
          "array.&lt;repository&gt",
          "avail",
          "function",
          "getrepositori",
          "lt;async&gt",
          "repositori",
          "repositorycontroller#getrepositori",
          "return"
        ],
        "RepositoryController.html#getRepositoryInformation": [
          "config",
          "file",
          "function",
          "getrepositoryinform",
          "given",
          "inform",
          "load",
          "lt;async&gt",
          "repositori",
          "repository.json",
          "repositorycontroller#getrepositoryinform",
          "repositorydata",
          "retriev"
        ],
        "RoomController.html": [
          "browser",
          "call",
          "class",
          "commun",
          "constructor",
          "control",
          "creat",
          "directli",
          "each",
          "haxbal",
          "haxroomie#addroom",
          "headless",
          "hhm",
          "instanc",
          "interfac",
          "manag",
          "ment",
          "method",
          "new",
          "on",
          "provid",
          "roomcontrol",
          "roomobject",
          "tab"
        ],
        "RoomController.html#running": [
          "boolean",
          "member",
          "room",
          "roomcontroller#run",
          "run"
        ],
        "RoomController.html#usable": [
          "boolean",
          "instanc",
          "member",
          "roomcontroller#us",
          "still",
          "usabl"
        ],
        "RoomController.html#roomInfo": [
          "contain",
          "copi",
          "data",
          "e.g",
          "member",
          "null",
          "object",
          "origin",
          "return",
          "room",
          "roomcontroller#roominfo",
          "roominfo",
          "roominfo.roomlink",
          "run"
        ],
        "RoomController.html#openRoomLock": [
          "boolean",
          "member",
          "open",
          "openroomlock",
          "process",
          "room",
          "roomcontroller#openroomlock",
          "true"
        ],
        "RoomController.html#plugins": [
          "control",
          "inform",
          "member",
          "object",
          "plugin",
          "plugincontrol",
          "requir",
          "room",
          "roomcontroller#plugin",
          "run",
          "us"
        ],
        "RoomController.html#repositories": [
          "control",
          "inform",
          "member",
          "object",
          "repositori",
          "repositorycontrol",
          "roomcontroller#repositori",
          "us"
        ],
        "RoomController.html#init": [
          "function",
          "haxbal",
          "headless",
          "init",
          "initi",
          "librari",
          "load",
          "lt;async&gt",
          "manag",
          "navig",
          "opt",
          "page",
          "roomcontrol",
          "roomcontroller#init",
          "url",
          "us"
        ],
        "RoomController.html#openRoom": [
          "browser",
          "config",
          "contain",
          "document",
          "file",
          "function",
          "global",
          "haxbal",
          "here",
          "hhm",
          "hrconfig",
          "lt;async&gt",
          "object",
          "open",
          "openroom",
          "properti",
          "room",
          "roomcontroller#openroom",
          "tab",
          "top",
          "us",
          "usabl",
          "want",
          "within"
        ],
        "RoomController.html#closeRoom": [
          "close",
          "closeroom",
          "function",
          "haxbal",
          "headless",
          "lt;async&gt",
          "navig",
          "out",
          "page",
          "room",
          "roomcontroller#closeroom",
          "url"
        ],
        "RoomController.html#callRoom": [
          "browser",
          "call",
          "callroom",
          "context",
          "fn",
          "function",
          "haxbal",
          "lt;async&gt",
          "promise.&lt;any&gt",
          "roomcontroller#callroom",
          "roomobject"
        ],
        "RoomController.html#eval": [
          "access",
          "arg",
          "browser",
          "code",
          "e.g",
          "eval",
          "evalu",
          "function",
          "given",
          "haxbal",
          "hhm.manager.room",
          "lt;async&gt",
          "page.evalu",
          "pagefunct",
          "promise.&lt;serializable&gt",
          "puppet",
          "room",
          "room.eval('hhm.manager.room.getplayerlist",
          "roomcontroller#ev",
          "roomobject",
          "run",
          "tab",
          "wrapper"
        ],
        "module-haxroomie.html": [
          "const",
          "haxroomi",
          "main",
          "modul",
          "module:haxroomi",
          "obtain",
          "require('haxroomi"
        ]
      },
      "length": 42
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "index.html": {
                            "ref": "index.html",
                            "tf": 35
                          },
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_module.html": {
                            "ref": "list_module.html",
                            "tf": 35
                          },
                          "RoomController.html#openRoom": {
                            "ref": "RoomController.html#openRoom",
                            "tf": 1.8518518518518516
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "a": {
                "docs": {},
                "b": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "PluginController.html#disablePlugin": {
                        "ref": "PluginController.html#disablePlugin",
                        "tf": 9.090909090909092
                      }
                    },
                    "e": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {
                                    "PluginController.html#disablePlugin": {
                                      "ref": "PluginController.html#disablePlugin",
                                      "tf": 670
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "RoomController.html": {
                            "ref": "RoomController.html",
                            "tf": 1.8518518518518516
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "PluginController.html#getPluginsThatDependOn": {
                        "ref": "PluginController.html#getPluginsThatDependOn",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {},
              "u": {
                "docs": {},
                "g": {
                  "docs": {
                    "Haxroomie.html#launchBrowser": {
                      "ref": "Haxroomie.html#launchBrowser",
                      "tf": 3.125
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "Haxroomie.html#removeRoom": {
                      "ref": "Haxroomie.html#removeRoom",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "RoomController.html#roomInfo": {
                    "ref": "RoomController.html#roomInfo",
                    "tf": 4.166666666666666
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "x": {
              "docs": {},
              "r": {
                "docs": {},
                "o": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "index.html": {
                            "ref": "index.html",
                            "tf": 600
                          },
                          "undefined": {
                            "tf": 475
                          },
                          "Haxroomie.html": {
                            "ref": "Haxroomie.html",
                            "tf": 1902
                          },
                          "Haxroomie.html#launchBrowser": {
                            "ref": "Haxroomie.html#launchBrowser",
                            "tf": 3.125
                          },
                          "module-haxroomie.html": {
                            "ref": "module-haxroomie.html",
                            "tf": 614.2857142857143
                          }
                        },
                        "e": {
                          "docs": {},
                          "#": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "h": {
                                        "docs": {},
                                        "b": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "w": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {
                                                    "Haxroomie.html#launchBrowser": {
                                                      "ref": "Haxroomie.html#launchBrowser",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "c": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "w": {
                                              "docs": {},
                                              "s": {
                                                "docs": {
                                                  "Haxroomie.html#closeBrowser": {
                                                    "ref": "Haxroomie.html#closeBrowser",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "h": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "Haxroomie.html#hasRoom": {
                                              "ref": "Haxroomie.html#hasRoom",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "g": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "Haxroomie.html#getRoom": {
                                              "ref": "Haxroomie.html#getRoom",
                                              "tf": 1150
                                            },
                                            "Haxroomie.html#getRooms": {
                                              "ref": "Haxroomie.html#getRooms",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "f": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {
                                                      "Haxroomie.html#getFirstRoom": {
                                                        "ref": "Haxroomie.html#getFirstRoom",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "r": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "v": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "m": {
                                                "docs": {
                                                  "Haxroomie.html#removeRoom": {
                                                    "ref": "Haxroomie.html#removeRoom",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "Haxroomie.html#addRoom": {
                                              "ref": "Haxroomie.html#addRoom",
                                              "tf": 1150
                                            },
                                            "RoomController.html": {
                                              "ref": "RoomController.html",
                                              "tf": 1.8518518518518516
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "PluginController.html": {
                        "ref": "PluginController.html",
                        "tf": 7.142857142857142
                      },
                      "RepositoryController.html": {
                        "ref": "RepositoryController.html",
                        "tf": 7.142857142857142
                      },
                      "RoomController.html": {
                        "ref": "RoomController.html",
                        "tf": 3.7037037037037033
                      },
                      "RoomController.html#init": {
                        "ref": "RoomController.html#init",
                        "tf": 7.6923076923076925
                      },
                      "RoomController.html#openRoom": {
                        "ref": "RoomController.html#openRoom",
                        "tf": 1.8518518518518516
                      },
                      "RoomController.html#closeRoom": {
                        "ref": "RoomController.html#closeRoom",
                        "tf": 10
                      },
                      "RoomController.html#callRoom": {
                        "ref": "RoomController.html#callRoom",
                        "tf": 8.333333333333332
                      },
                      "RoomController.html#eval": {
                        "ref": "RoomController.html#eval",
                        "tf": 3.125
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {
                            "PluginController.html#hasPlugin": {
                              "ref": "PluginController.html#hasPlugin",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "o": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Haxroomie.html#hasRoom": {
                          "ref": "Haxroomie.html#hasRoom",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "PluginController.html": {
                            "ref": "PluginController.html",
                            "tf": 7.142857142857142
                          },
                          "Haxroomie.html": {
                            "ref": "Haxroomie.html",
                            "tf": 2
                          },
                          "RepositoryController.html": {
                            "ref": "RepositoryController.html",
                            "tf": 7.142857142857142
                          },
                          "RoomController.html": {
                            "ref": "RoomController.html",
                            "tf": 3.7037037037037033
                          },
                          "RoomController.html#init": {
                            "ref": "RoomController.html#init",
                            "tf": 7.6923076923076925
                          },
                          "RoomController.html#closeRoom": {
                            "ref": "RoomController.html#closeRoom",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "RoomController.html#openRoom": {
                    "ref": "RoomController.html#openRoom",
                    "tf": 1.8518518518518516
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "m": {
              "docs": {
                "PluginController.html": {
                  "ref": "PluginController.html",
                  "tf": 7.142857142857142
                },
                "PluginController.html#enablePlugin": {
                  "ref": "PluginController.html#enablePlugin",
                  "tf": 10
                },
                "PluginController.html#disablePlugin": {
                  "ref": "PluginController.html#disablePlugin",
                  "tf": 4.545454545454546
                },
                "RepositoryController.html": {
                  "ref": "RepositoryController.html",
                  "tf": 7.142857142857142
                },
                "RoomController.html": {
                  "ref": "RoomController.html",
                  "tf": 1.8518518518518516
                },
                "RoomController.html#openRoom": {
                  "ref": "RoomController.html#openRoom",
                  "tf": 3.7037037037037033
                }
              },
              ".": {
                "docs": {},
                "m": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              ".": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "RoomController.html#eval": {
                                            "ref": "RoomController.html#eval",
                                            "tf": 3.125
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "g": {
              "docs": {},
              "h": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "RepositoryController.html#addRepository": {
                          "ref": "RepositoryController.html#addRepository",
                          "tf": 2.380952380952381
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "c": {
              "docs": {},
              "o": {
                "docs": {},
                "n": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "g": {
                        "docs": {
                          "RoomController.html#openRoom": {
                            "ref": "RoomController.html#openRoom",
                            "tf": 1.8518518518518516
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "undefined": {
                        "tf": 625
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "Haxroomie.html": {
                          "ref": "Haxroomie.html",
                          "tf": 2
                        },
                        "RoomController.html": {
                          "ref": "RoomController.html",
                          "tf": 1.8518518518518516
                        },
                        "RoomController.html#usable": {
                          "ref": "RoomController.html#usable",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "RepositoryController.html#getRepositoryInformation": {
                        "ref": "RepositoryController.html#getRepositoryInformation",
                        "tf": 10
                      },
                      "RoomController.html#plugins": {
                        "ref": "RoomController.html#plugins",
                        "tf": 6.25
                      },
                      "RoomController.html#repositories": {
                        "ref": "RoomController.html#repositories",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "RoomController.html": {
                            "ref": "RoomController.html",
                            "tf": 1.8518518518518516
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "RoomController.html#init": {
                    "ref": "RoomController.html#init",
                    "tf": 683.3333333333334
                  }
                },
                "i": {
                  "docs": {
                    "RoomController.html#init": {
                      "ref": "RoomController.html#init",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "Haxroomie.html#hasRoom": {
                "ref": "Haxroomie.html#hasRoom",
                "tf": 43.33333333333333
              },
              "Haxroomie.html#getRoom": {
                "ref": "Haxroomie.html#getRoom",
                "tf": 45.83333333333333
              },
              "Haxroomie.html#removeRoom": {
                "ref": "Haxroomie.html#removeRoom",
                "tf": 37.878787878787875
              },
              "Haxroomie.html#addRoom": {
                "ref": "Haxroomie.html#addRoom",
                "tf": 28.333333333333332
              }
            }
          },
          ".": {
            "docs": {
              "RepositoryController.html#addRepository": {
                "ref": "RepositoryController.html#addRepository",
                "tf": 2.380952380952381
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "PluginController.html#getPlugins": {
                        "ref": "PluginController.html#getPlugins",
                        "tf": 16.666666666666664
                      },
                      "PluginController.html#getPlugin": {
                        "ref": "PluginController.html#getPlugin",
                        "tf": 10
                      },
                      "PluginController.html#getPluginConfig": {
                        "ref": "PluginController.html#getPluginConfig",
                        "tf": 9.090909090909092
                      },
                      "Haxroomie.html#getRoom": {
                        "ref": "Haxroomie.html#getRoom",
                        "tf": 12.5
                      },
                      "Haxroomie.html#getRooms": {
                        "ref": "Haxroomie.html#getRooms",
                        "tf": 12.5
                      },
                      "Haxroomie.html#getFirstRoom": {
                        "ref": "Haxroomie.html#getFirstRoom",
                        "tf": 12.5
                      },
                      "RepositoryController.html#getRepositories": {
                        "ref": "RepositoryController.html#getRepositories",
                        "tf": 16.666666666666664
                      },
                      "RoomController.html#roomInfo": {
                        "ref": "RoomController.html#roomInfo",
                        "tf": 4.166666666666666
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "i": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "v": {
                      "docs": {
                        "RepositoryController.html#getRepositoryInformation": {
                          "ref": "RepositoryController.html#getRepositoryInformation",
                          "tf": 5
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "o": {
                "docs": {},
                "s": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "PluginController.html#addPlugin": {
                                "ref": "PluginController.html#addPlugin",
                                "tf": 3.8461538461538463
                              },
                              "PluginController.html#setPluginConfig": {
                                "ref": "PluginController.html#setPluginConfig",
                                "tf": 2.5
                              },
                              "RepositoryController.html": {
                                "ref": "RepositoryController.html",
                                "tf": 7.142857142857142
                              },
                              "RepositoryController.html#addRepository": {
                                "ref": "RepositoryController.html#addRepository",
                                "tf": 29.523809523809526
                              },
                              "RepositoryController.html#getRepositories": {
                                "ref": "RepositoryController.html#getRepositories",
                                "tf": 16.666666666666664
                              },
                              "RepositoryController.html#getRepositoryInformation": {
                                "ref": "RepositoryController.html#getRepositoryInformation",
                                "tf": 35
                              },
                              "RoomController.html#repositories": {
                                "ref": "RoomController.html#repositories",
                                "tf": 710
                              }
                            }
                          },
                          "y": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {
                                            "RepositoryController.html": {
                                              "ref": "RepositoryController.html",
                                              "tf": 1900
                                            },
                                            "RoomController.html#repositories": {
                                              "ref": "RoomController.html#repositories",
                                              "tf": 50
                                            }
                                          },
                                          "l": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "#": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "p": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "i": {
                                                                            "docs": {
                                                                              "RepositoryController.html#addRepository": {
                                                                                "ref": "RepositoryController.html#addRepository",
                                                                                "tf": 1150
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "g": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "p": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "i": {
                                                                            "docs": {
                                                                              "RepositoryController.html#getRepositories": {
                                                                                "ref": "RepositoryController.html#getRepositories",
                                                                                "tf": 1150
                                                                              }
                                                                            }
                                                                          },
                                                                          "y": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {},
                                                                              "n": {
                                                                                "docs": {},
                                                                                "f": {
                                                                                  "docs": {},
                                                                                  "o": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      "m": {
                                                                                        "docs": {
                                                                                          "RepositoryController.html#getRepositoryInformation": {
                                                                                            "ref": "RepositoryController.html#getRepositoryInformation",
                                                                                            "tf": 1150
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            ".": {
                              "docs": {},
                              "j": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {
                                        "RepositoryController.html#getRepositoryInformation": {
                                          "ref": "RepositoryController.html#getRepositoryInformation",
                                          "tf": 5
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "d": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "a": {
                                    "docs": {
                                      "RepositoryController.html#getRepositoryInformation": {
                                        "ref": "RepositoryController.html#getRepositoryInformation",
                                        "tf": 25
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "q": {
              "docs": {},
              "u": {
                "docs": {},
                "i": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Haxroomie.html": {
                        "ref": "Haxroomie.html",
                        "tf": 2
                      },
                      "RoomController.html#plugins": {
                        "ref": "RoomController.html#plugins",
                        "tf": 6.25
                      }
                    },
                    "e": {
                      "docs": {},
                      "(": {
                        "docs": {},
                        "'": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "x": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "i": {
                                          "docs": {
                                            "module-haxroomie.html": {
                                              "ref": "module-haxroomie.html",
                                              "tf": 7.142857142857142
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "t": {
                  "docs": {
                    "Haxroomie.html#launchBrowser": {
                      "ref": "Haxroomie.html#launchBrowser",
                      "tf": 3.125
                    }
                  }
                },
                "v": {
                  "docs": {
                    "Haxroomie.html#removeRoom": {
                      "ref": "Haxroomie.html#removeRoom",
                      "tf": 9.090909090909092
                    }
                  },
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "Haxroomie.html#removeRoom": {
                                "ref": "Haxroomie.html#removeRoom",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {
                  "PluginController.html#hasPlugin": {
                    "ref": "PluginController.html#hasPlugin",
                    "tf": 8.333333333333332
                  },
                  "PluginController.html#setPluginConfig": {
                    "ref": "PluginController.html#setPluginConfig",
                    "tf": 2.5
                  },
                  "PluginController.html#getPluginConfig": {
                    "ref": "PluginController.html#getPluginConfig",
                    "tf": 4.545454545454546
                  },
                  "Haxroomie.html": {
                    "ref": "Haxroomie.html",
                    "tf": 2
                  },
                  "Haxroomie.html#hasRoom": {
                    "ref": "Haxroomie.html#hasRoom",
                    "tf": 10
                  },
                  "RoomController.html#running": {
                    "ref": "RoomController.html#running",
                    "tf": 25
                  },
                  "RoomController.html#roomInfo": {
                    "ref": "RoomController.html#roomInfo",
                    "tf": 4.166666666666666
                  },
                  "RoomController.html#openRoomLock": {
                    "ref": "RoomController.html#openRoomLock",
                    "tf": 12.5
                  },
                  "RoomController.html#plugins": {
                    "ref": "RoomController.html#plugins",
                    "tf": 6.25
                  },
                  "RoomController.html#openRoom": {
                    "ref": "RoomController.html#openRoom",
                    "tf": 1.8518518518518516
                  },
                  "RoomController.html#closeRoom": {
                    "ref": "RoomController.html#closeRoom",
                    "tf": 5
                  },
                  "RoomController.html#eval": {
                    "ref": "RoomController.html#eval",
                    "tf": 3.125
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "Haxroomie.html": {
                                  "ref": "Haxroomie.html",
                                  "tf": 4
                                },
                                "Haxroomie.html#getRoom": {
                                  "ref": "Haxroomie.html#getRoom",
                                  "tf": 45.83333333333333
                                },
                                "Haxroomie.html#getRooms": {
                                  "ref": "Haxroomie.html#getRooms",
                                  "tf": 12.5
                                },
                                "Haxroomie.html#getFirstRoom": {
                                  "ref": "Haxroomie.html#getFirstRoom",
                                  "tf": 62.5
                                },
                                "Haxroomie.html#removeRoom": {
                                  "ref": "Haxroomie.html#removeRoom",
                                  "tf": 9.090909090909092
                                },
                                "Haxroomie.html#addRoom": {
                                  "ref": "Haxroomie.html#addRoom",
                                  "tf": 28.333333333333332
                                },
                                "RoomController.html": {
                                  "ref": "RoomController.html",
                                  "tf": 1905.5555555555557
                                },
                                "RoomController.html#init": {
                                  "ref": "RoomController.html#init",
                                  "tf": 3.8461538461538463
                                }
                              },
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "#": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "n": {
                                            "docs": {
                                              "RoomController.html#running": {
                                                "ref": "RoomController.html#running",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        },
                                        "o": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {
                                                        "RoomController.html#roomInfo": {
                                                          "ref": "RoomController.html#roomInfo",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {
                                                            "RoomController.html#repositories": {
                                                              "ref": "RoomController.html#repositories",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "u": {
                                        "docs": {},
                                        "s": {
                                          "docs": {
                                            "RoomController.html#usable": {
                                              "ref": "RoomController.html#usable",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      },
                                      "o": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {
                                                        "RoomController.html#openRoom": {
                                                          "ref": "RoomController.html#openRoom",
                                                          "tf": 1150
                                                        }
                                                      },
                                                      "l": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {},
                                                            "k": {
                                                              "docs": {
                                                                "RoomController.html#openRoomLock": {
                                                                  "ref": "RoomController.html#openRoomLock",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "p": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {
                                                    "RoomController.html#plugins": {
                                                      "ref": "RoomController.html#plugins",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "RoomController.html#init": {
                                                  "ref": "RoomController.html#init",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "c": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {
                                                          "RoomController.html#closeRoom": {
                                                            "ref": "RoomController.html#closeRoom",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {
                                                        "RoomController.html#callRoom": {
                                                          "ref": "RoomController.html#callRoom",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "v": {
                                          "docs": {
                                            "RoomController.html#eval": {
                                              "ref": "RoomController.html#eval",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "j": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "RoomController.html": {
                                "ref": "RoomController.html",
                                "tf": 1.8518518518518516
                              },
                              "RoomController.html#callRoom": {
                                "ref": "RoomController.html#callRoom",
                                "tf": 8.333333333333332
                              },
                              "RoomController.html#eval": {
                                "ref": "RoomController.html#eval",
                                "tf": 3.125
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "o": {
                        "docs": {
                          "RoomController.html#roomInfo": {
                            "ref": "RoomController.html#roomInfo",
                            "tf": 700
                          }
                        },
                        ".": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "k": {
                                          "docs": {
                                            "RoomController.html#roomInfo": {
                                              "ref": "RoomController.html#roomInfo",
                                              "tf": 4.166666666666666
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                ".": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "v": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "(": {
                            "docs": {},
                            "'": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    ".": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    ".": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "m": {
                                                              "docs": {},
                                                              ".": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "p": {
                                                                        "docs": {},
                                                                        "l": {
                                                                          "docs": {},
                                                                          "a": {
                                                                            "docs": {},
                                                                            "y": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "l": {
                                                                                    "docs": {},
                                                                                    "i": {
                                                                                      "docs": {},
                                                                                      "s": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {
                                                                                            "RoomController.html#eval": {
                                                                                              "ref": "RoomController.html#eval",
                                                                                              "tf": 3.125
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {
                "Haxroomie.html": {
                  "ref": "Haxroomie.html",
                  "tf": 2
                },
                "Haxroomie.html#hasRoom": {
                  "ref": "Haxroomie.html#hasRoom",
                  "tf": 10
                },
                "RoomController.html#running": {
                  "ref": "RoomController.html#running",
                  "tf": 725
                },
                "RoomController.html#roomInfo": {
                  "ref": "RoomController.html#roomInfo",
                  "tf": 8.333333333333332
                },
                "RoomController.html#plugins": {
                  "ref": "RoomController.html#plugins",
                  "tf": 6.25
                },
                "RoomController.html#eval": {
                  "ref": "RoomController.html#eval",
                  "tf": 3.125
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "u": {
            "docs": {},
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 35
                      },
                      "undefined": {
                        "tf": 110
                      },
                      "list_tutorial.html": {
                        "ref": "list_tutorial.html",
                        "tf": 635
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {
                "PluginController.html#setPluginConfig": {
                  "ref": "PluginController.html#setPluginConfig",
                  "tf": 2.5
                }
              }
            },
            "u": {
              "docs": {},
              "e": {
                "docs": {
                  "RepositoryController.html#addRepository": {
                    "ref": "RepositoryController.html#addRepository",
                    "tf": 2.380952380952381
                  },
                  "RoomController.html#openRoomLock": {
                    "ref": "RoomController.html#openRoomLock",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "b": {
              "docs": {
                "Haxroomie.html": {
                  "ref": "Haxroomie.html",
                  "tf": 2
                },
                "Haxroomie.html#removeRoom": {
                  "ref": "Haxroomie.html#removeRoom",
                  "tf": 4.545454545454546
                },
                "RoomController.html": {
                  "ref": "RoomController.html",
                  "tf": 1.8518518518518516
                },
                "RoomController.html#openRoom": {
                  "ref": "RoomController.html#openRoom",
                  "tf": 1.8518518518518516
                },
                "RoomController.html#eval": {
                  "ref": "RoomController.html#eval",
                  "tf": 3.125
                }
              }
            }
          },
          "o": {
            "docs": {},
            "p": {
              "docs": {
                "RoomController.html#openRoom": {
                  "ref": "RoomController.html#openRoom",
                  "tf": 1.8518518518518516
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      },
                      "RoomController.html#openRoom": {
                        "ref": "RoomController.html#openRoom",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "PluginController.html#getPluginsThatDependOn": {
                  "ref": "PluginController.html#getPluginsThatDependOn",
                  "tf": 8.333333333333332
                }
              },
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {
                            "PluginController.html#getPlugins": {
                              "ref": "PluginController.html#getPlugins",
                              "tf": 683.3333333333334
                            },
                            "PluginController.html#getPlugin": {
                              "ref": "PluginController.html#getPlugin",
                              "tf": 675
                            }
                          },
                          "s": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {
                                                      "PluginController.html#getPluginsThatDependOn": {
                                                        "ref": "PluginController.html#getPluginsThatDependOn",
                                                        "tf": 675
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "g": {
                                      "docs": {
                                        "PluginController.html#getPluginConfig": {
                                          "ref": "PluginController.html#getPluginConfig",
                                          "tf": 675
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "o": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Haxroomie.html#getRoom": {
                          "ref": "Haxroomie.html#getRoom",
                          "tf": 683.3333333333334
                        },
                        "Haxroomie.html#getRooms": {
                          "ref": "Haxroomie.html#getRooms",
                          "tf": 700
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "RepositoryController.html#getRepositories": {
                                      "ref": "RepositoryController.html#getRepositories",
                                      "tf": 683.3333333333334
                                    }
                                  }
                                },
                                "y": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "f": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "m": {
                                              "docs": {
                                                "RepositoryController.html#getRepositoryInformation": {
                                                  "ref": "RepositoryController.html#getRepositoryInformation",
                                                  "tf": 675
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "m": {
                                "docs": {
                                  "Haxroomie.html#getFirstRoom": {
                                    "ref": "Haxroomie.html#getFirstRoom",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "PluginController.html#getPlugin": {
                      "ref": "PluginController.html#getPlugin",
                      "tf": 10
                    },
                    "PluginController.html#enablePlugin": {
                      "ref": "PluginController.html#enablePlugin",
                      "tf": 10
                    },
                    "PluginController.html#disablePlugin": {
                      "ref": "PluginController.html#disablePlugin",
                      "tf": 9.090909090909092
                    },
                    "PluginController.html#getPluginsThatDependOn": {
                      "ref": "PluginController.html#getPluginsThatDependOn",
                      "tf": 8.333333333333332
                    },
                    "PluginController.html#hasPlugin": {
                      "ref": "PluginController.html#hasPlugin",
                      "tf": 8.333333333333332
                    },
                    "PluginController.html#setPluginConfig": {
                      "ref": "PluginController.html#setPluginConfig",
                      "tf": 5
                    },
                    "PluginController.html#getPluginConfig": {
                      "ref": "PluginController.html#getPluginConfig",
                      "tf": 4.545454545454546
                    },
                    "Haxroomie.html#launchBrowser": {
                      "ref": "Haxroomie.html#launchBrowser",
                      "tf": 3.125
                    },
                    "Haxroomie.html#hasRoom": {
                      "ref": "Haxroomie.html#hasRoom",
                      "tf": 10
                    },
                    "Haxroomie.html#getRoom": {
                      "ref": "Haxroomie.html#getRoom",
                      "tf": 12.5
                    },
                    "Haxroomie.html#removeRoom": {
                      "ref": "Haxroomie.html#removeRoom",
                      "tf": 4.545454545454546
                    },
                    "Haxroomie.html#addRoom": {
                      "ref": "Haxroomie.html#addRoom",
                      "tf": 8.333333333333332
                    },
                    "RepositoryController.html#getRepositoryInformation": {
                      "ref": "RepositoryController.html#getRepositoryInformation",
                      "tf": 5
                    },
                    "RoomController.html#eval": {
                      "ref": "RoomController.html#eval",
                      "tf": 3.125
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "i": {
              "docs": {
                "undefined": {
                  "tf": 475
                }
              }
            },
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "PluginController.html": {
                      "ref": "PluginController.html",
                      "tf": 117.14285714285714
                    },
                    "Haxroomie.html": {
                      "ref": "Haxroomie.html",
                      "tf": 112
                    },
                    "Haxroomie.html#launchBrowser": {
                      "ref": "Haxroomie.html#launchBrowser",
                      "tf": 3.125
                    },
                    "RepositoryController.html": {
                      "ref": "RepositoryController.html",
                      "tf": 117.14285714285714
                    },
                    "RoomController.html": {
                      "ref": "RoomController.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "s": {
                "docs": {},
                "e": {
                  "docs": {
                    "Haxroomie.html#closeBrowser": {
                      "ref": "Haxroomie.html#closeBrowser",
                      "tf": 12.5
                    },
                    "Haxroomie.html#removeRoom": {
                      "ref": "Haxroomie.html#removeRoom",
                      "tf": 4.545454545454546
                    },
                    "RoomController.html#closeRoom": {
                      "ref": "RoomController.html#closeRoom",
                      "tf": 5
                    }
                  },
                  "b": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "w": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Haxroomie.html#closeBrowser": {
                                "ref": "Haxroomie.html#closeBrowser",
                                "tf": 700
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "r": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "RoomController.html#closeRoom": {
                              "ref": "RoomController.html#closeRoom",
                              "tf": 700
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "undefined": {
                        "tf": 475
                      },
                      "PluginController.html#setPluginConfig": {
                        "ref": "PluginController.html#setPluginConfig",
                        "tf": 5
                      },
                      "PluginController.html#getPluginConfig": {
                        "ref": "PluginController.html#getPluginConfig",
                        "tf": 9.090909090909092
                      },
                      "Haxroomie.html#addRoom": {
                        "ref": "Haxroomie.html#addRoom",
                        "tf": 20
                      },
                      "RepositoryController.html#getRepositoryInformation": {
                        "ref": "RepositoryController.html#getRepositoryInformation",
                        "tf": 5
                      },
                      "RoomController.html#openRoom": {
                        "ref": "RoomController.html#openRoom",
                        "tf": 32.407407407407405
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "PluginController.html": {
                          "ref": "PluginController.html",
                          "tf": 7.142857142857142
                        },
                        "Haxroomie.html": {
                          "ref": "Haxroomie.html",
                          "tf": 2
                        },
                        "Haxroomie.html#launchBrowser": {
                          "ref": "Haxroomie.html#launchBrowser",
                          "tf": 3.125
                        },
                        "Haxroomie.html#closeBrowser": {
                          "ref": "Haxroomie.html#closeBrowser",
                          "tf": 12.5
                        },
                        "Haxroomie.html#removeRoom": {
                          "ref": "Haxroomie.html#removeRoom",
                          "tf": 4.545454545454546
                        },
                        "RepositoryController.html": {
                          "ref": "RepositoryController.html",
                          "tf": 7.142857142857142
                        },
                        "RoomController.html": {
                          "ref": "RoomController.html",
                          "tf": 1.8518518518518516
                        },
                        "RoomController.html#plugins": {
                          "ref": "RoomController.html#plugins",
                          "tf": 6.25
                        },
                        "RoomController.html#repositories": {
                          "ref": "RoomController.html#repositories",
                          "tf": 10
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "PluginController.html#addPlugin": {
                          "ref": "PluginController.html#addPlugin",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  },
                  "x": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "RoomController.html#callRoom": {
                          "ref": "RoomController.html#callRoom",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                },
                "a": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "RoomController.html#roomInfo": {
                          "ref": "RoomController.html#roomInfo",
                          "tf": 4.166666666666666
                        },
                        "RoomController.html#openRoom": {
                          "ref": "RoomController.html#openRoom",
                          "tf": 1.8518518518518516
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "module-haxroomie.html": {
                      "ref": "module-haxroomie.html",
                      "tf": 7.142857142857142
                    }
                  },
                  "r": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Haxroomie.html#launchBrowser": {
                                  "ref": "Haxroomie.html#launchBrowser",
                                  "tf": 3.125
                                },
                                "RoomController.html": {
                                  "ref": "RoomController.html",
                                  "tf": 1.8518518518518516
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "m": {
                "docs": {},
                "u": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "RoomController.html": {
                        "ref": "RoomController.html",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "i": {
                "docs": {
                  "RoomController.html#roomInfo": {
                    "ref": "RoomController.html#roomInfo",
                    "tf": 4.166666666666666
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "e": {
                "docs": {
                  "RoomController.html#eval": {
                    "ref": "RoomController.html#eval",
                    "tf": 3.125
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "PluginController.html#hasPlugin": {
                      "ref": "PluginController.html#hasPlugin",
                      "tf": 8.333333333333332
                    },
                    "Haxroomie.html#hasRoom": {
                      "ref": "Haxroomie.html#hasRoom",
                      "tf": 10
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {
                      "Haxroomie.html": {
                        "ref": "Haxroomie.html",
                        "tf": 2
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Haxroomie.html": {
                      "ref": "Haxroomie.html",
                      "tf": 2
                    },
                    "Haxroomie.html#addRoom": {
                      "ref": "Haxroomie.html#addRoom",
                      "tf": 8.333333333333332
                    },
                    "RoomController.html": {
                      "ref": "RoomController.html",
                      "tf": 1.8518518518518516
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "'": {
                "docs": {},
                "t": {
                  "docs": {
                    "RepositoryController.html#addRepository": {
                      "ref": "RepositoryController.html#addRepository",
                      "tf": 2.380952380952381
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "RoomController.html": {
                    "ref": "RoomController.html",
                    "tf": 1.8518518518518516
                  },
                  "RoomController.html#callRoom": {
                    "ref": "RoomController.html#callRoom",
                    "tf": 8.333333333333332
                  }
                },
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "RoomController.html#callRoom": {
                            "ref": "RoomController.html#callRoom",
                            "tf": 675
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "p": {
            "docs": {
              "undefined": {
                "tf": 625
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "undefined": {
                "tf": 475
              },
              "PluginController.html#setPluginConfig": {
                "ref": "PluginController.html#setPluginConfig",
                "tf": 2.5
              },
              "Haxroomie.html#launchBrowser": {
                "ref": "Haxroomie.html#launchBrowser",
                "tf": 3.125
              },
              "RoomController.html#plugins": {
                "ref": "RoomController.html#plugins",
                "tf": 6.25
              },
              "RoomController.html#repositories": {
                "ref": "RoomController.html#repositories",
                "tf": 10
              },
              "RoomController.html#init": {
                "ref": "RoomController.html#init",
                "tf": 3.8461538461538463
              },
              "RoomController.html#openRoom": {
                "ref": "RoomController.html#openRoom",
                "tf": 1.8518518518518516
              }
            },
            "a": {
              "docs": {},
              "b": {
                "docs": {},
                "l": {
                  "docs": {
                    "RoomController.html#usable": {
                      "ref": "RoomController.html#usable",
                      "tf": 716.6666666666666
                    },
                    "RoomController.html#openRoom": {
                      "ref": "RoomController.html#openRoom",
                      "tf": 1.8518518518518516
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "l": {
              "docs": {},
              "o": {
                "docs": {},
                "a": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "PluginController.html#setPluginConfig": {
                        "ref": "PluginController.html#setPluginConfig",
                        "tf": 2.5
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "l": {
              "docs": {
                "RoomController.html#init": {
                  "ref": "RoomController.html#init",
                  "tf": 3.8461538461538463
                },
                "RoomController.html#closeRoom": {
                  "ref": "RoomController.html#closeRoom",
                  "tf": 5
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_module.html": {
                    "ref": "list_module.html",
                    "tf": 110
                  },
                  "list_tutorial.html": {
                    "ref": "list_tutorial.html",
                    "tf": 110
                  },
                  "PluginController.html#getPluginsThatDependOn": {
                    "ref": "PluginController.html#getPluginsThatDependOn",
                    "tf": 8.333333333333332
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "list_module.html": {
                                "ref": "list_module.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "t": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "i": {
                              "docs": {
                                "list_tutorial.html": {
                                  "ref": "list_tutorial.html",
                                  "tf": 1300
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {},
              "r": {
                "docs": {},
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "RoomController.html#init": {
                          "ref": "RoomController.html#init",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "PluginController.html#getPlugins": {
                    "ref": "PluginController.html#getPlugins",
                    "tf": 16.666666666666664
                  },
                  "PluginController.html#hasPlugin": {
                    "ref": "PluginController.html#hasPlugin",
                    "tf": 8.333333333333332
                  },
                  "PluginController.html#addPlugin": {
                    "ref": "PluginController.html#addPlugin",
                    "tf": 7.6923076923076925
                  },
                  "PluginController.html#setPluginConfig": {
                    "ref": "PluginController.html#setPluginConfig",
                    "tf": 5
                  },
                  "PluginController.html#getPluginConfig": {
                    "ref": "PluginController.html#getPluginConfig",
                    "tf": 4.545454545454546
                  },
                  "RepositoryController.html#addRepository": {
                    "ref": "RepositoryController.html#addRepository",
                    "tf": 2.380952380952381
                  },
                  "RepositoryController.html#getRepositoryInformation": {
                    "ref": "RepositoryController.html#getRepositoryInformation",
                    "tf": 5
                  },
                  "RoomController.html#init": {
                    "ref": "RoomController.html#init",
                    "tf": 3.8461538461538463
                  }
                }
              }
            },
            "w": {
              "docs": {},
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "RepositoryController.html#addRepository": {
                        "ref": "RepositoryController.html#addRepository",
                        "tf": 2.380952380952381
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "PluginController.html#getPlugins": {
                                  "ref": "PluginController.html#getPlugins",
                                  "tf": 33.33333333333333
                                },
                                "PluginController.html#getPlugin": {
                                  "ref": "PluginController.html#getPlugin",
                                  "tf": 25
                                },
                                "PluginController.html#enablePlugin": {
                                  "ref": "PluginController.html#enablePlugin",
                                  "tf": 25
                                },
                                "PluginController.html#disablePlugin": {
                                  "ref": "PluginController.html#disablePlugin",
                                  "tf": 20
                                },
                                "PluginController.html#getPluginsThatDependOn": {
                                  "ref": "PluginController.html#getPluginsThatDependOn",
                                  "tf": 25
                                },
                                "PluginController.html#hasPlugin": {
                                  "ref": "PluginController.html#hasPlugin",
                                  "tf": 25
                                },
                                "PluginController.html#addPlugin": {
                                  "ref": "PluginController.html#addPlugin",
                                  "tf": 25
                                },
                                "PluginController.html#setPluginConfig": {
                                  "ref": "PluginController.html#setPluginConfig",
                                  "tf": 25
                                },
                                "PluginController.html#getPluginConfig": {
                                  "ref": "PluginController.html#getPluginConfig",
                                  "tf": 25
                                },
                                "Haxroomie.html#launchBrowser": {
                                  "ref": "Haxroomie.html#launchBrowser",
                                  "tf": 50
                                },
                                "Haxroomie.html#closeBrowser": {
                                  "ref": "Haxroomie.html#closeBrowser",
                                  "tf": 50
                                },
                                "Haxroomie.html#removeRoom": {
                                  "ref": "Haxroomie.html#removeRoom",
                                  "tf": 33.33333333333333
                                },
                                "Haxroomie.html#addRoom": {
                                  "ref": "Haxroomie.html#addRoom",
                                  "tf": 20
                                },
                                "RepositoryController.html#addRepository": {
                                  "ref": "RepositoryController.html#addRepository",
                                  "tf": 20
                                },
                                "RepositoryController.html#getRepositories": {
                                  "ref": "RepositoryController.html#getRepositories",
                                  "tf": 33.33333333333333
                                },
                                "RepositoryController.html#getRepositoryInformation": {
                                  "ref": "RepositoryController.html#getRepositoryInformation",
                                  "tf": 25
                                },
                                "RoomController.html#init": {
                                  "ref": "RoomController.html#init",
                                  "tf": 33.33333333333333
                                },
                                "RoomController.html#openRoom": {
                                  "ref": "RoomController.html#openRoom",
                                  "tf": 25
                                },
                                "RoomController.html#closeRoom": {
                                  "ref": "RoomController.html#closeRoom",
                                  "tf": 50
                                },
                                "RoomController.html#callRoom": {
                                  "ref": "RoomController.html#callRoom",
                                  "tf": 25
                                },
                                "RoomController.html#eval": {
                                  "ref": "RoomController.html#eval",
                                  "tf": 20
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Haxroomie.html": {
                        "ref": "Haxroomie.html",
                        "tf": 2
                      },
                      "Haxroomie.html#launchBrowser": {
                        "ref": "Haxroomie.html#launchBrowser",
                        "tf": 6.25
                      }
                    },
                    "b": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "w": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "Haxroomie.html": {
                                  "ref": "Haxroomie.html",
                                  "tf": 2
                                },
                                "Haxroomie.html#launchBrowser": {
                                  "ref": "Haxroomie.html#launchBrowser",
                                  "tf": 700
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_module.html": {
                      "ref": "list_module.html",
                      "tf": 635
                    },
                    "module-haxroomie.html": {
                      "ref": "module-haxroomie.html",
                      "tf": 117.14285714285714
                    }
                  },
                  "e": {
                    "docs": {},
                    ":": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "x": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "i": {
                                      "docs": {
                                        "module-haxroomie.html": {
                                          "ref": "module-haxroomie.html",
                                          "tf": 1300
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "a": {
                "docs": {},
                "g": {
                  "docs": {
                    "PluginController.html": {
                      "ref": "PluginController.html",
                      "tf": 7.142857142857142
                    },
                    "Haxroomie.html": {
                      "ref": "Haxroomie.html",
                      "tf": 2
                    },
                    "RepositoryController.html": {
                      "ref": "RepositoryController.html",
                      "tf": 7.142857142857142
                    },
                    "RoomController.html": {
                      "ref": "RoomController.html",
                      "tf": 1.8518518518518516
                    },
                    "RoomController.html#init": {
                      "ref": "RoomController.html#init",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "n": {
                "docs": {
                  "module-haxroomie.html": {
                    "ref": "module-haxroomie.html",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "PluginController.html#setPluginConfig": {
                        "ref": "PluginController.html#setPluginConfig",
                        "tf": 2.5
                      },
                      "Haxroomie.html": {
                        "ref": "Haxroomie.html",
                        "tf": 2
                      },
                      "RoomController.html": {
                        "ref": "RoomController.html",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {
                  "RoomController.html": {
                    "ref": "RoomController.html",
                    "tf": 1.8518518518518516
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "RoomController.html#running": {
                        "ref": "RoomController.html#running",
                        "tf": 110
                      },
                      "RoomController.html#usable": {
                        "ref": "RoomController.html#usable",
                        "tf": 110
                      },
                      "RoomController.html#roomInfo": {
                        "ref": "RoomController.html#roomInfo",
                        "tf": 110
                      },
                      "RoomController.html#openRoomLock": {
                        "ref": "RoomController.html#openRoomLock",
                        "tf": 110
                      },
                      "RoomController.html#plugins": {
                        "ref": "RoomController.html#plugins",
                        "tf": 110
                      },
                      "RoomController.html#repositories": {
                        "ref": "RoomController.html#repositories",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "a": {
          "docs": {},
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_tutorial.html": {
                      "ref": "list_tutorial.html",
                      "tf": 35
                    },
                    "PluginController.html#addPlugin": {
                      "ref": "PluginController.html#addPlugin",
                      "tf": 3.8461538461538463
                    },
                    "PluginController.html#setPluginConfig": {
                      "ref": "PluginController.html#setPluginConfig",
                      "tf": 2.5
                    },
                    "Haxroomie.html#getRooms": {
                      "ref": "Haxroomie.html#getRooms",
                      "tf": 12.5
                    },
                    "RepositoryController.html#getRepositories": {
                      "ref": "RepositoryController.html#getRepositories",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "PluginController.html#disablePlugin": {
                      "ref": "PluginController.html#disablePlugin",
                      "tf": 4.545454545454546
                    },
                    "Haxroomie.html#getRooms": {
                      "ref": "Haxroomie.html#getRooms",
                      "tf": 12.5
                    }
                  },
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "&": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "Haxroomie.html#getRooms": {
                                                                  "ref": "Haxroomie.html#getRooms",
                                                                  "tf": 50
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "e": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "y": {
                                                "docs": {},
                                                "&": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "RepositoryController.html#getRepositories": {
                                                          "ref": "RepositoryController.html#getRepositories",
                                                          "tf": 33.33333333333333
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {
                "RoomController.html#eval": {
                  "ref": "RoomController.html#eval",
                  "tf": 20
                }
              }
            }
          },
          "d": {
            "docs": {
              "Haxroomie.html#getFirstRoom": {
                "ref": "Haxroomie.html#getFirstRoom",
                "tf": 12.5
              },
              "RepositoryController.html#addRepository": {
                "ref": "RepositoryController.html#addRepository",
                "tf": 4.761904761904762
              }
            },
            "d": {
              "docs": {
                "PluginController.html#addPlugin": {
                  "ref": "PluginController.html#addPlugin",
                  "tf": 3.8461538461538463
                },
                "Haxroomie.html#addRoom": {
                  "ref": "Haxroomie.html#addRoom",
                  "tf": 8.333333333333332
                },
                "RepositoryController.html#addRepository": {
                  "ref": "RepositoryController.html#addRepository",
                  "tf": 2.380952380952381
                }
              },
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {
                            "PluginController.html#addPlugin": {
                              "ref": "PluginController.html#addPlugin",
                              "tf": 675
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "o": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Haxroomie.html#addRoom": {
                          "ref": "Haxroomie.html#addRoom",
                          "tf": 670
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "RepositoryController.html#addRepository": {
                                      "ref": "RepositoryController.html#addRepository",
                                      "tf": 670
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "y": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "Haxroomie.html": {
                      "ref": "Haxroomie.html",
                      "tf": 2
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "RepositoryController.html#addRepository": {
                        "ref": "RepositoryController.html#addRepository",
                        "tf": 22.38095238095238
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "c": {
              "docs": {},
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "RoomController.html#eval": {
                        "ref": "RoomController.html#eval",
                        "tf": 3.125
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "l": {
            "docs": {},
            "u": {
              "docs": {},
              "g": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "PluginController.html": {
                        "ref": "PluginController.html",
                        "tf": 7.142857142857142
                      },
                      "PluginController.html#getPlugins": {
                        "ref": "PluginController.html#getPlugins",
                        "tf": 16.666666666666664
                      },
                      "PluginController.html#getPlugin": {
                        "ref": "PluginController.html#getPlugin",
                        "tf": 10
                      },
                      "PluginController.html#enablePlugin": {
                        "ref": "PluginController.html#enablePlugin",
                        "tf": 10
                      },
                      "PluginController.html#disablePlugin": {
                        "ref": "PluginController.html#disablePlugin",
                        "tf": 9.090909090909092
                      },
                      "PluginController.html#getPluginsThatDependOn": {
                        "ref": "PluginController.html#getPluginsThatDependOn",
                        "tf": 16.666666666666664
                      },
                      "PluginController.html#hasPlugin": {
                        "ref": "PluginController.html#hasPlugin",
                        "tf": 8.333333333333332
                      },
                      "PluginController.html#addPlugin": {
                        "ref": "PluginController.html#addPlugin",
                        "tf": 36.53846153846154
                      },
                      "PluginController.html#setPluginConfig": {
                        "ref": "PluginController.html#setPluginConfig",
                        "tf": 10
                      },
                      "PluginController.html#getPluginConfig": {
                        "ref": "PluginController.html#getPluginConfig",
                        "tf": 13.636363636363635
                      },
                      "RepositoryController.html#addRepository": {
                        "ref": "RepositoryController.html#addRepository",
                        "tf": 2.380952380952381
                      },
                      "RoomController.html#plugins": {
                        "ref": "RoomController.html#plugins",
                        "tf": 706.25
                      }
                    },
                    "c": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "PluginController.html": {
                                      "ref": "PluginController.html",
                                      "tf": 1900
                                    },
                                    "RoomController.html#plugins": {
                                      "ref": "RoomController.html#plugins",
                                      "tf": 50
                                    }
                                  },
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "#": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {
                                                              "PluginController.html#getPlugins": {
                                                                "ref": "PluginController.html#getPlugins",
                                                                "tf": 1150
                                                              },
                                                              "PluginController.html#getPlugin": {
                                                                "ref": "PluginController.html#getPlugin",
                                                                "tf": 1150
                                                              }
                                                            },
                                                            "s": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "h": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "d": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "p": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "n": {
                                                                                "docs": {},
                                                                                "d": {
                                                                                  "docs": {},
                                                                                  "o": {
                                                                                    "docs": {},
                                                                                    "n": {
                                                                                      "docs": {
                                                                                        "PluginController.html#getPluginsThatDependOn": {
                                                                                          "ref": "PluginController.html#getPluginsThatDependOn",
                                                                                          "tf": 1150
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "c": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "f": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {
                                                                          "PluginController.html#getPluginConfig": {
                                                                            "ref": "PluginController.html#getPluginConfig",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "b": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "u": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {
                                                                    "PluginController.html#enablePlugin": {
                                                                      "ref": "PluginController.html#enablePlugin",
                                                                      "tf": 1150
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "d": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "u": {
                                                              "docs": {},
                                                              "g": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "n": {
                                                                    "docs": {
                                                                      "PluginController.html#disablePlugin": {
                                                                        "ref": "PluginController.html#disablePlugin",
                                                                        "tf": 1150
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "h": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {
                                                              "PluginController.html#hasPlugin": {
                                                                "ref": "PluginController.html#hasPlugin",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "a": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {
                                                              "PluginController.html#addPlugin": {
                                                                "ref": "PluginController.html#addPlugin",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "s": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "f": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {
                                                                          "PluginController.html#setPluginConfig": {
                                                                            "ref": "PluginController.html#setPluginConfig",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "f": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "g": {
                                "docs": {
                                  "PluginController.html#setPluginConfig": {
                                    "ref": "PluginController.html#setPluginConfig",
                                    "tf": 25
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "d": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "a": {
                            "docs": {
                              "PluginController.html#getPlugin": {
                                "ref": "PluginController.html#getPlugin",
                                "tf": 10
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "PluginController.html#addPlugin": {
                              "ref": "PluginController.html#addPlugin",
                              "tf": 7.6923076923076925
                            }
                          }
                        }
                      }
                    },
                    "n": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "PluginController.html#setPluginConfig": {
                              "ref": "PluginController.html#setPluginConfig",
                              "tf": 27.5
                            },
                            "PluginController.html#getPluginConfig": {
                              "ref": "PluginController.html#getPluginConfig",
                              "tf": 29.545454545454547
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              ";": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          ".": {
                                            "docs": {},
                                            "&": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  ";": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "u": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "n": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "&": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {},
                                                                              ";": {
                                                                                "docs": {},
                                                                                "&": {
                                                                                  "docs": {},
                                                                                  "g": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {
                                                                                        "PluginController.html#getPlugins": {
                                                                                          "ref": "PluginController.html#getPlugins",
                                                                                          "tf": 33.33333333333333
                                                                                        },
                                                                                        "PluginController.html#getPluginsThatDependOn": {
                                                                                          "ref": "PluginController.html#getPluginsThatDependOn",
                                                                                          "tf": 25
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "n": {
                                    "docs": {},
                                    "y": {
                                      "docs": {},
                                      "&": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "RoomController.html#callRoom": {
                                                "ref": "RoomController.html#callRoom",
                                                "tf": 25
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "?": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "&": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "PluginController.html#getPlugin": {
                                                                "ref": "PluginController.html#getPlugin",
                                                                "tf": 25
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "b": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "&": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "PluginController.html#enablePlugin": {
                                                        "ref": "PluginController.html#enablePlugin",
                                                        "tf": 25
                                                      },
                                                      "PluginController.html#disablePlugin": {
                                                        "ref": "PluginController.html#disablePlugin",
                                                        "tf": 20
                                                      },
                                                      "PluginController.html#hasPlugin": {
                                                        "ref": "PluginController.html#hasPlugin",
                                                        "tf": 25
                                                      },
                                                      "RepositoryController.html#addRepository": {
                                                        "ref": "RepositoryController.html#addRepository",
                                                        "tf": 20
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "n": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "&": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "PluginController.html#addPlugin": {
                                                      "ref": "PluginController.html#addPlugin",
                                                      "tf": 25
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "o": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "j": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "&": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "PluginController.html#getPluginConfig": {
                                                      "ref": "PluginController.html#getPluginConfig",
                                                      "tf": 25
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "s": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "z": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "b": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "&": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "RoomController.html#eval": {
                                                                  "ref": "RoomController.html#eval",
                                                                  "tf": 20
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "RoomController.html": {
                        "ref": "RoomController.html",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "RoomController.html#openRoomLock": {
                          "ref": "RoomController.html#openRoomLock",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "RoomController.html#openRoom": {
                            "ref": "RoomController.html#openRoom",
                            "tf": 3.7037037037037033
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "RepositoryController.html#addRepository": {
                            "ref": "RepositoryController.html#addRepository",
                            "tf": 4.761904761904762
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {
                  "Haxroomie.html#launchBrowser": {
                    "ref": "Haxroomie.html#launchBrowser",
                    "tf": 3.125
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Haxroomie.html#launchBrowser": {
                          "ref": "Haxroomie.html#launchBrowser",
                          "tf": 3.125
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Haxroomie.html#launchBrowser": {
                        "ref": "Haxroomie.html#launchBrowser",
                        "tf": 3.125
                      },
                      "Haxroomie.html#closeBrowser": {
                        "ref": "Haxroomie.html#closeBrowser",
                        "tf": 12.5
                      },
                      "RoomController.html#eval": {
                        "ref": "RoomController.html#eval",
                        "tf": 3.125
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "g": {
              "docs": {},
              "e": {
                "docs": {
                  "RoomController.html#init": {
                    "ref": "RoomController.html#init",
                    "tf": 3.8461538461538463
                  },
                  "RoomController.html#closeRoom": {
                    "ref": "RoomController.html#closeRoom",
                    "tf": 5
                  }
                },
                ".": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "v": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "u": {
                            "docs": {
                              "RoomController.html#eval": {
                                "ref": "RoomController.html#eval",
                                "tf": 3.125
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "f": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "RoomController.html#eval": {
                              "ref": "RoomController.html#eval",
                              "tf": 20
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "PluginController.html#getPlugins": {
                            "ref": "PluginController.html#getPlugins",
                            "tf": 110
                          },
                          "PluginController.html#getPlugin": {
                            "ref": "PluginController.html#getPlugin",
                            "tf": 110
                          },
                          "PluginController.html#enablePlugin": {
                            "ref": "PluginController.html#enablePlugin",
                            "tf": 110
                          },
                          "PluginController.html#disablePlugin": {
                            "ref": "PluginController.html#disablePlugin",
                            "tf": 110
                          },
                          "PluginController.html#getPluginsThatDependOn": {
                            "ref": "PluginController.html#getPluginsThatDependOn",
                            "tf": 110
                          },
                          "PluginController.html#hasPlugin": {
                            "ref": "PluginController.html#hasPlugin",
                            "tf": 110
                          },
                          "PluginController.html#addPlugin": {
                            "ref": "PluginController.html#addPlugin",
                            "tf": 110
                          },
                          "PluginController.html#setPluginConfig": {
                            "ref": "PluginController.html#setPluginConfig",
                            "tf": 110
                          },
                          "PluginController.html#getPluginConfig": {
                            "ref": "PluginController.html#getPluginConfig",
                            "tf": 110
                          },
                          "Haxroomie.html#launchBrowser": {
                            "ref": "Haxroomie.html#launchBrowser",
                            "tf": 110
                          },
                          "Haxroomie.html#closeBrowser": {
                            "ref": "Haxroomie.html#closeBrowser",
                            "tf": 110
                          },
                          "Haxroomie.html#hasRoom": {
                            "ref": "Haxroomie.html#hasRoom",
                            "tf": 110
                          },
                          "Haxroomie.html#getRoom": {
                            "ref": "Haxroomie.html#getRoom",
                            "tf": 110
                          },
                          "Haxroomie.html#getRooms": {
                            "ref": "Haxroomie.html#getRooms",
                            "tf": 110
                          },
                          "Haxroomie.html#getFirstRoom": {
                            "ref": "Haxroomie.html#getFirstRoom",
                            "tf": 110
                          },
                          "Haxroomie.html#removeRoom": {
                            "ref": "Haxroomie.html#removeRoom",
                            "tf": 110
                          },
                          "Haxroomie.html#addRoom": {
                            "ref": "Haxroomie.html#addRoom",
                            "tf": 110
                          },
                          "RepositoryController.html#addRepository": {
                            "ref": "RepositoryController.html#addRepository",
                            "tf": 110
                          },
                          "RepositoryController.html#getRepositories": {
                            "ref": "RepositoryController.html#getRepositories",
                            "tf": 110
                          },
                          "RepositoryController.html#getRepositoryInformation": {
                            "ref": "RepositoryController.html#getRepositoryInformation",
                            "tf": 110
                          },
                          "RoomController.html#init": {
                            "ref": "RoomController.html#init",
                            "tf": 110
                          },
                          "RoomController.html#openRoom": {
                            "ref": "RoomController.html#openRoom",
                            "tf": 110
                          },
                          "RoomController.html#closeRoom": {
                            "ref": "RoomController.html#closeRoom",
                            "tf": 110
                          },
                          "RoomController.html#callRoom": {
                            "ref": "RoomController.html#callRoom",
                            "tf": 118.33333333333333
                          },
                          "RoomController.html#eval": {
                            "ref": "RoomController.html#eval",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "c": {
                "docs": {
                  "PluginController.html#disablePlugin": {
                    "ref": "PluginController.html#disablePlugin",
                    "tf": 20
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "d": {
                  "docs": {
                    "RepositoryController.html#addRepository": {
                      "ref": "RepositoryController.html#addRepository",
                      "tf": 2.380952380952381
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "r": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "Haxroomie.html#getFirstRoom": {
                      "ref": "Haxroomie.html#getFirstRoom",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {
                  "RepositoryController.html#getRepositoryInformation": {
                    "ref": "RepositoryController.html#getRepositoryInformation",
                    "tf": 5
                  },
                  "RoomController.html#openRoom": {
                    "ref": "RoomController.html#openRoom",
                    "tf": 1.8518518518518516
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "RoomController.html#callRoom": {
                "ref": "RoomController.html#callRoom",
                "tf": 25
              }
            }
          }
        },
        "n": {
          "docs": {},
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "PluginController.html#getPlugin": {
                    "ref": "PluginController.html#getPlugin",
                    "tf": 35
                  },
                  "PluginController.html#enablePlugin": {
                    "ref": "PluginController.html#enablePlugin",
                    "tf": 35
                  },
                  "PluginController.html#disablePlugin": {
                    "ref": "PluginController.html#disablePlugin",
                    "tf": 29.090909090909093
                  },
                  "PluginController.html#getPluginsThatDependOn": {
                    "ref": "PluginController.html#getPluginsThatDependOn",
                    "tf": 25
                  },
                  "PluginController.html#hasPlugin": {
                    "ref": "PluginController.html#hasPlugin",
                    "tf": 33.33333333333333
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "i": {
                "docs": {},
                "g": {
                  "docs": {
                    "RoomController.html#init": {
                      "ref": "RoomController.html#init",
                      "tf": 3.8461538461538463
                    },
                    "RoomController.html#closeRoom": {
                      "ref": "RoomController.html#closeRoom",
                      "tf": 5
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "PluginController.html#addPlugin": {
                  "ref": "PluginController.html#addPlugin",
                  "tf": 3.8461538461538463
                },
                "Haxroomie.html#addRoom": {
                  "ref": "Haxroomie.html#addRoom",
                  "tf": 8.333333333333332
                },
                "RepositoryController.html#addRepository": {
                  "ref": "RepositoryController.html#addRepository",
                  "tf": 2.380952380952381
                },
                "RoomController.html": {
                  "ref": "RoomController.html",
                  "tf": 1.8518518518518516
                }
              }
            }
          },
          "u": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "RoomController.html#roomInfo": {
                    "ref": "RoomController.html#roomInfo",
                    "tf": 4.166666666666666
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "n": {
            "docs": {},
            "a": {
              "docs": {},
              "b": {
                "docs": {},
                "l": {
                  "docs": {
                    "PluginController.html#enablePlugin": {
                      "ref": "PluginController.html#enablePlugin",
                      "tf": 10
                    }
                  },
                  "e": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "n": {
                                "docs": {
                                  "PluginController.html#enablePlugin": {
                                    "ref": "PluginController.html#enablePlugin",
                                    "tf": 675
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "Haxroomie.html": {
                    "ref": "Haxroomie.html",
                    "tf": 2
                  },
                  "RoomController.html": {
                    "ref": "RoomController.html",
                    "tf": 1.8518518518518516
                  }
                }
              }
            }
          },
          ".": {
            "docs": {},
            "g": {
              "docs": {
                "RoomController.html#roomInfo": {
                  "ref": "RoomController.html#roomInfo",
                  "tf": 4.166666666666666
                },
                "RoomController.html#eval": {
                  "ref": "RoomController.html#eval",
                  "tf": 3.125
                }
              }
            }
          },
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {
                  "RoomController.html#eval": {
                    "ref": "RoomController.html#eval",
                    "tf": 670
                  }
                },
                "u": {
                  "docs": {
                    "RoomController.html#eval": {
                      "ref": "RoomController.html#eval",
                      "tf": 3.125
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "r": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "PluginController.html#disablePlugin": {
                      "ref": "PluginController.html#disablePlugin",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "g": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "RoomController.html#roomInfo": {
                        "ref": "RoomController.html#roomInfo",
                        "tf": 4.166666666666666
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "Haxroomie.html": {
                "ref": "Haxroomie.html",
                "tf": 2
              },
              "Haxroomie.html#launchBrowser": {
                "ref": "Haxroomie.html#launchBrowser",
                "tf": 3.125
              },
              "RoomController.html": {
                "ref": "RoomController.html",
                "tf": 1.8518518518518516
              }
            }
          },
          "t": {
            "docs": {},
            "h": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "w": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "RepositoryController.html#addRepository": {
                            "ref": "RepositoryController.html#addRepository",
                            "tf": 2.380952380952381
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "RoomController.html#roomInfo": {
                        "ref": "RoomController.html#roomInfo",
                        "tf": 54.166666666666664
                      },
                      "RoomController.html#plugins": {
                        "ref": "RoomController.html#plugins",
                        "tf": 6.25
                      },
                      "RoomController.html#repositories": {
                        "ref": "RoomController.html#repositories",
                        "tf": 10
                      },
                      "RoomController.html#openRoom": {
                        "ref": "RoomController.html#openRoom",
                        "tf": 30.555555555555557
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "module-haxroomie.html": {
                        "ref": "module-haxroomie.html",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {
                  "RoomController.html#openRoomLock": {
                    "ref": "RoomController.html#openRoomLock",
                    "tf": 12.5
                  },
                  "RoomController.html#openRoom": {
                    "ref": "RoomController.html#openRoom",
                    "tf": 1.8518518518518516
                  }
                },
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "RoomController.html#openRoom": {
                            "ref": "RoomController.html#openRoom",
                            "tf": 675
                          }
                        },
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "k": {
                                "docs": {
                                  "RoomController.html#openRoomLock": {
                                    "ref": "RoomController.html#openRoomLock",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {
                "RoomController.html#init": {
                  "ref": "RoomController.html#init",
                  "tf": 33.33333333333333
                }
              }
            }
          },
          "u": {
            "docs": {},
            "t": {
              "docs": {
                "RoomController.html#closeRoom": {
                  "ref": "RoomController.html#closeRoom",
                  "tf": 5
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "t": {
            "docs": {},
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "PluginController.html#addPlugin": {
                        "ref": "PluginController.html#addPlugin",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "l": {
                "docs": {},
                "l": {
                  "docs": {
                    "RoomController.html#usable": {
                      "ref": "RoomController.html#usable",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "PluginController.html#setPluginConfig": {
                  "ref": "PluginController.html#setPluginConfig",
                  "tf": 5
                },
                "RepositoryController.html#addRepository": {
                  "ref": "RepositoryController.html#addRepository",
                  "tf": 2.380952380952381
                }
              },
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "g": {
                                      "docs": {
                                        "PluginController.html#setPluginConfig": {
                                          "ref": "PluginController.html#setPluginConfig",
                                          "tf": 675
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "a": {
              "docs": {},
              "w": {
                "docs": {},
                "n": {
                  "docs": {
                    "Haxroomie.html": {
                      "ref": "Haxroomie.html",
                      "tf": 2
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "e": {
            "docs": {},
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Haxroomie.html": {
                      "ref": "Haxroomie.html",
                      "tf": 2
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "w": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Haxroomie.html": {
                          "ref": "Haxroomie.html",
                          "tf": 6
                        },
                        "Haxroomie.html#launchBrowser": {
                          "ref": "Haxroomie.html#launchBrowser",
                          "tf": 6.25
                        },
                        "Haxroomie.html#closeBrowser": {
                          "ref": "Haxroomie.html#closeBrowser",
                          "tf": 12.5
                        },
                        "Haxroomie.html#removeRoom": {
                          "ref": "Haxroomie.html#removeRoom",
                          "tf": 4.545454545454546
                        },
                        "RoomController.html": {
                          "ref": "RoomController.html",
                          "tf": 1.8518518518518516
                        },
                        "RoomController.html#openRoom": {
                          "ref": "RoomController.html#openRoom",
                          "tf": 1.8518518518518516
                        },
                        "RoomController.html#callRoom": {
                          "ref": "RoomController.html#callRoom",
                          "tf": 8.333333333333332
                        },
                        "RoomController.html#eval": {
                          "ref": "RoomController.html#eval",
                          "tf": 3.125
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Haxroomie.html#hasRoom": {
                          "ref": "Haxroomie.html#hasRoom",
                          "tf": 33.33333333333333
                        },
                        "RoomController.html#running": {
                          "ref": "RoomController.html#running",
                          "tf": 50
                        },
                        "RoomController.html#usable": {
                          "ref": "RoomController.html#usable",
                          "tf": 50
                        },
                        "RoomController.html#openRoomLock": {
                          "ref": "RoomController.html#openRoomLock",
                          "tf": 50
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {
                  "RoomController.html#openRoom": {
                    "ref": "RoomController.html#openRoom",
                    "tf": 1.8518518518518516
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "RoomController.html#openRoom": {
                        "ref": "RoomController.html#openRoom",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "p": {
                "docs": {},
                "p": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "RoomController.html#eval": {
                          "ref": "RoomController.html#eval",
                          "tf": 3.125
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 466
    },
    "corpusTokens": [
      "access",
      "ad",
      "add",
      "addplugin",
      "addrepositori",
      "addroom",
      "anyth",
      "append",
      "arg",
      "array",
      "array.&lt;repository&gt",
      "array.&lt;roomcontroller&gt",
      "avail",
      "befor",
      "boolean",
      "browser",
      "call",
      "callroom",
      "can't",
      "check",
      "chrome",
      "class",
      "cli",
      "close",
      "closebrows",
      "closeroom",
      "code",
      "commun",
      "config",
      "const",
      "constructor",
      "contain",
      "content",
      "context",
      "control",
      "copi",
      "creat",
      "data",
      "debug",
      "delet",
      "depend",
      "directli",
      "disabl",
      "disableplugin",
      "document",
      "e.g",
      "each",
      "enabl",
      "enableplugin",
      "eval",
      "evalu",
      "file",
      "first",
      "fn",
      "forc",
      "found",
      "function",
      "get",
      "getfirstroom",
      "getplugin",
      "getpluginconfig",
      "getpluginsthatdependon",
      "getrepositori",
      "getrepositoryinform",
      "getroom",
      "given",
      "global",
      "hasplugin",
      "hasroom",
      "haxbal",
      "haxroomi",
      "haxroomie#addroom",
      "haxroomie#closebrows",
      "haxroomie#getfirstroom",
      "haxroomie#getroom",
      "haxroomie#hasroom",
      "haxroomie#launchbrows",
      "haxroomie#removeroom",
      "headless",
      "here",
      "hhm",
      "hhm.manager.room",
      "highest",
      "hrconfig",
      "i.",
      "id",
      "index",
      "inform",
      "init",
      "initi",
      "instal",
      "instanc",
      "interfac",
      "launch",
      "launchbrows",
      "librari",
      "list",
      "list:class",
      "list:modul",
      "list:tutori",
      "load",
      "lowest",
      "lt;async&gt",
      "main",
      "manag",
      "member",
      "ment",
      "method",
      "modul",
      "module:haxroomi",
      "name",
      "navig",
      "new",
      "null",
      "object",
      "obtain",
      "on",
      "open",
      "openroom",
      "openroomlock",
      "opt",
      "order",
      "origin",
      "otherwis",
      "out",
      "page",
      "page.evalu",
      "pagefunct",
      "plugin",
      "pluginconfig",
      "plugincontrol",
      "plugincontroller#addplugin",
      "plugincontroller#disableplugin",
      "plugincontroller#enableplugin",
      "plugincontroller#getplugin",
      "plugincontroller#getpluginconfig",
      "plugincontroller#getpluginsthatdependon",
      "plugincontroller#hasplugin",
      "plugincontroller#setpluginconfig",
      "plugindata",
      "plugindef",
      "pluginnam",
      "port",
      "possibl",
      "prioriti",
      "process",
      "promise.&lt;?plugindata&gt",
      "promise.&lt;any&gt",
      "promise.&lt;array.&lt;plugindata&gt;&gt",
      "promise.&lt;boolean&gt",
      "promise.&lt;number&gt",
      "promise.&lt;object&gt",
      "promise.&lt;serializable&gt",
      "properti",
      "provid",
      "puppet",
      "readm",
      "remot",
      "remov",
      "removeroom",
      "repositori",
      "repository.json",
      "repositorycontrol",
      "repositorycontroller#addrepositori",
      "repositorycontroller#getrepositori",
      "repositorycontroller#getrepositoryinform",
      "repositorydata",
      "requir",
      "require('haxroomi",
      "retriev",
      "return",
      "room",
      "room.eval('hhm.manager.room.getplayerlist",
      "roomcontrol",
      "roomcontroller#callroom",
      "roomcontroller#closeroom",
      "roomcontroller#ev",
      "roomcontroller#init",
      "roomcontroller#openroom",
      "roomcontroller#openroomlock",
      "roomcontroller#plugin",
      "roomcontroller#repositori",
      "roomcontroller#roominfo",
      "roomcontroller#run",
      "roomcontroller#us",
      "roominfo",
      "roominfo.roomlink",
      "roomobject",
      "run",
      "set",
      "setpluginconfig",
      "spawn",
      "still",
      "string",
      "tab",
      "top",
      "tri",
      "true",
      "tutori",
      "unload",
      "url",
      "us",
      "usabl",
      "vp",
      "want",
      "within",
      "wrapper"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Haxroomie",
      "longname": "index",
      "name": "Haxroomie",
      "tags": "index",
      "summary": "Documentation and tutorials.",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "undefined": {
      "kind": "tutorial",
      "title": "Using the haxroomie config (CLI)",
      "longname": "cli-using-haxroomie-config",
      "name": "cli-using-haxroomie-config",
      "tags": "cli-using-haxroomie-config",
      "summary": "",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_module.html": {
      "id": "list_module.html",
      "kind": "list",
      "title": "Modules",
      "longname": "list:module",
      "name": "Modules",
      "tags": "list:module",
      "summary": "All documented modules.",
      "description": "",
      "body": ""
    },
    "list_tutorial.html": {
      "id": "list_tutorial.html",
      "kind": "list",
      "title": "Tutorials",
      "longname": "list:tutorial",
      "name": "Tutorials",
      "tags": "list:tutorial",
      "summary": "All available tutorials.",
      "description": "",
      "body": ""
    },
    "PluginController.html": {
      "id": "PluginController.html",
      "kind": "class",
      "title": "PluginController",
      "longname": "PluginController",
      "name": "PluginController",
      "tags": "PluginController",
      "summary": "",
      "description": "Class for controlling Haxball Headless Manager (HHM) plugins.",
      "body": ""
    },
    "PluginController.html#getPlugins": {
      "id": "PluginController.html#getPlugins",
      "kind": "function",
      "title": "&lt;async&gt; getPlugins() → {Promise.&lt;Array.&lt;PluginData&gt;&gt;}",
      "longname": "PluginController#getPlugins",
      "name": "getPlugins",
      "tags": "PluginController#getPlugins getPlugins",
      "summary": "",
      "description": "Returns loaded plugins."
    },
    "PluginController.html#getPlugin": {
      "id": "PluginController.html#getPlugin",
      "kind": "function",
      "title": "&lt;async&gt; getPlugin( name ) → {Promise.&lt;?PluginData&gt;}",
      "longname": "PluginController#getPlugin",
      "name": "getPlugin",
      "tags": "PluginController#getPlugin getPlugin",
      "summary": "",
      "description": "Returns PluginData of the given plugin name."
    },
    "PluginController.html#enablePlugin": {
      "id": "PluginController.html#enablePlugin",
      "kind": "function",
      "title": "&lt;async&gt; enablePlugin( name ) → {Promise.&lt;boolean&gt;}",
      "longname": "PluginController#enablePlugin",
      "name": "enablePlugin",
      "tags": "PluginController#enablePlugin enablePlugin",
      "summary": "",
      "description": "Enables a HHM plugin with the given name."
    },
    "PluginController.html#disablePlugin": {
      "id": "PluginController.html#disablePlugin",
      "kind": "function",
      "title": "&lt;async&gt; disablePlugin( name [, force ] ) → {Promise.&lt;boolean&gt;}",
      "longname": "PluginController#disablePlugin",
      "name": "disablePlugin",
      "tags": "PluginController#disablePlugin disablePlugin",
      "summary": "",
      "description": "Disables a HHM plugin with the given name. If the name is an Array then it disables all the plugins in the given order."
    },
    "PluginController.html#getPluginsThatDependOn": {
      "id": "PluginController.html#getPluginsThatDependOn",
      "kind": "function",
      "title": "&lt;async&gt; getPluginsThatDependOn( name ) → {Promise.&lt;Array.&lt;PluginData&gt;&gt;}",
      "longname": "PluginController#getPluginsThatDependOn",
      "name": "getPluginsThatDependOn",
      "tags": "PluginController#getPluginsThatDependOn getPluginsThatDependOn",
      "summary": "",
      "description": "Gets a list of plugins that depend on the given plugin."
    },
    "PluginController.html#hasPlugin": {
      "id": "PluginController.html#hasPlugin",
      "kind": "function",
      "title": "&lt;async&gt; hasPlugin( name ) → {Promise.&lt;boolean&gt;}",
      "longname": "PluginController#hasPlugin",
      "name": "hasPlugin",
      "tags": "PluginController#hasPlugin hasPlugin",
      "summary": "",
      "description": "Checks if the room has a plugin with given name loaded."
    },
    "PluginController.html#addPlugin": {
      "id": "PluginController.html#addPlugin",
      "kind": "function",
      "title": "&lt;async&gt; addPlugin( plugin ) → {Promise.&lt;number&gt;}",
      "longname": "PluginController#addPlugin",
      "name": "addPlugin",
      "tags": "PluginController#addPlugin addPlugin",
      "summary": "",
      "description": "Adds a new plugin. If the plugin is string, then it will be loaded from the available repositories. If the plugin is PluginDef, then it will be loaded from contents of PluginDef."
    },
    "PluginController.html#setPluginConfig": {
      "id": "PluginController.html#setPluginConfig",
      "kind": "function",
      "title": "&lt;async&gt; setPluginConfig( pluginConfig [, pluginName ] )",
      "longname": "PluginController#setPluginConfig",
      "name": "setPluginConfig",
      "tags": "PluginController#setPluginConfig setPluginConfig",
      "summary": "",
      "description": "Sets the rooms plugin config. Tries to load plugins that are not loaded from the available repositories. Plugins will not get unloaded using this method. If pluginName is given then only config for the given plugin is set."
    },
    "PluginController.html#getPluginConfig": {
      "id": "PluginController.html#getPluginConfig",
      "kind": "function",
      "title": "&lt;async&gt; getPluginConfig( [ pluginName ] ) → {Promise.&lt;object&gt;}",
      "longname": "PluginController#getPluginConfig",
      "name": "getPluginConfig",
      "tags": "PluginController#getPluginConfig getPluginConfig",
      "summary": "",
      "description": "Returns the plugin config for all loaded plugins in the room or if pluginName is given, then return the config for that plugin."
    },
    "Haxroomie.html": {
      "id": "Haxroomie.html",
      "kind": "class",
      "title": "Haxroomie",
      "longname": "Haxroomie",
      "name": "Haxroomie",
      "tags": "Haxroomie",
      "summary": "",
      "description": "Class for spawning the headless chrome browser and managing RoomControllers. Each RoomController controls one room running in a browsers tab. After creating the Haxroomie instance it is required to launch the browser with the launchBrowser method before anything else.",
      "body": ""
    },
    "Haxroomie.html#launchBrowser": {
      "id": "Haxroomie.html#launchBrowser",
      "kind": "function",
      "title": "&lt;async&gt; launchBrowser()",
      "longname": "Haxroomie#launchBrowser",
      "name": "launchBrowser",
      "tags": "Haxroomie#launchBrowser launchBrowser",
      "summary": "",
      "description": "Launches the puppeteer controlled browser using the remote-debugging-port given in Haxroomie classes constructor. It is only possible to launch one browser."
    },
    "Haxroomie.html#closeBrowser": {
      "id": "Haxroomie.html#closeBrowser",
      "kind": "function",
      "title": "&lt;async&gt; closeBrowser()",
      "longname": "Haxroomie#closeBrowser",
      "name": "closeBrowser",
      "tags": "Haxroomie#closeBrowser closeBrowser",
      "summary": "",
      "description": "Closes the puppeteer controlled browser."
    },
    "Haxroomie.html#hasRoom": {
      "id": "Haxroomie.html#hasRoom",
      "kind": "function",
      "title": "hasRoom( id ) → {boolean}",
      "longname": "Haxroomie#hasRoom",
      "name": "hasRoom",
      "tags": "Haxroomie#hasRoom hasRoom",
      "summary": "",
      "description": "Checks if there is a room running with the given id."
    },
    "Haxroomie.html#getRoom": {
      "id": "Haxroomie.html#getRoom",
      "kind": "function",
      "title": "getRoom( id ) → {RoomController}",
      "longname": "Haxroomie#getRoom",
      "name": "getRoom",
      "tags": "Haxroomie#getRoom getRoom",
      "summary": "",
      "description": "Returns a RoomController with the given id."
    },
    "Haxroomie.html#getRooms": {
      "id": "Haxroomie.html#getRooms",
      "kind": "function",
      "title": "getRooms() → {Array.&lt;RoomController&gt;}",
      "longname": "Haxroomie#getRooms",
      "name": "getRooms",
      "tags": "Haxroomie#getRooms getRooms",
      "summary": "",
      "description": "Returns an array of available RoomControllers."
    },
    "Haxroomie.html#getFirstRoom": {
      "id": "Haxroomie.html#getFirstRoom",
      "kind": "function",
      "title": "getFirstRoom() → {RoomController}",
      "longname": "Haxroomie#getFirstRoom",
      "name": "getFirstRoom",
      "tags": "Haxroomie#getFirstRoom getFirstRoom",
      "summary": "",
      "description": "Returns the RoomController that was first added."
    },
    "Haxroomie.html#removeRoom": {
      "id": "Haxroomie.html#removeRoom",
      "kind": "function",
      "title": "&lt;async&gt; removeRoom( id )",
      "longname": "Haxroomie#removeRoom",
      "name": "removeRoom",
      "tags": "Haxroomie#removeRoom removeRoom",
      "summary": "",
      "description": "Removes a RoomController with the given id. Removing deletes the RoomController and closes the browser tab it is controlling."
    },
    "Haxroomie.html#addRoom": {
      "id": "Haxroomie.html#addRoom",
      "kind": "function",
      "title": "&lt;async&gt; addRoom( id [, config ] ) → {RoomController}",
      "longname": "Haxroomie#addRoom",
      "name": "addRoom",
      "tags": "Haxroomie#addRoom addRoom",
      "summary": "",
      "description": "Creates and adds a new RoomController with the given id."
    },
    "RepositoryController.html": {
      "id": "RepositoryController.html",
      "kind": "class",
      "title": "RepositoryController",
      "longname": "RepositoryController",
      "name": "RepositoryController",
      "tags": "RepositoryController",
      "summary": "",
      "description": "Class for controlling Haxball Headless Manager (HHM) repositories.",
      "body": ""
    },
    "RepositoryController.html#addRepository": {
      "id": "RepositoryController.html#addRepository",
      "kind": "function",
      "title": "&lt;async&gt; addRepository( repository [, append ] ) → {Promise.&lt;boolean&gt;}",
      "longname": "RepositoryController#addRepository",
      "name": "addRepository",
      "tags": "RepositoryController#addRepository addRepository",
      "summary": "",
      "description": "Adds a repository. If append is set to true, the new repository will be added with the lowest priority, i.e. plugins will only be loaded from it they can't be found in any other repository. Otherwise the repository will be added with the highest priority."
    },
    "RepositoryController.html#getRepositories": {
      "id": "RepositoryController.html#getRepositories",
      "kind": "function",
      "title": "&lt;async&gt; getRepositories() → {Array.&lt;Repository&gt;}",
      "longname": "RepositoryController#getRepositories",
      "name": "getRepositories",
      "tags": "RepositoryController#getRepositories getRepositories",
      "summary": "",
      "description": "Returns available repositories."
    },
    "RepositoryController.html#getRepositoryInformation": {
      "id": "RepositoryController.html#getRepositoryInformation",
      "kind": "function",
      "title": "&lt;async&gt; getRepositoryInformation( repository ) → {RepositoryData}",
      "longname": "RepositoryController#getRepositoryInformation",
      "name": "getRepositoryInformation",
      "tags": "RepositoryController#getRepositoryInformation getRepositoryInformation",
      "summary": "",
      "description": "Retrieves information about the given repository. The information is loaded from repositorys repository.json config file."
    },
    "RoomController.html": {
      "id": "RoomController.html",
      "kind": "class",
      "title": "RoomController",
      "longname": "RoomController",
      "name": "RoomController",
      "tags": "RoomController",
      "summary": "",
      "description": "RoomController provides an interface to communicate with HaxBall roomObject and Haxball Headless Manager (HHM). Each RoomController controls one tab in the headless browser. The constructor is not ment to be called directly! Create new RoomController instances with the Haxroomie#addRoom method.",
      "body": ""
    },
    "RoomController.html#running": {
      "id": "RoomController.html#running",
      "kind": "member",
      "title": "running :boolean",
      "longname": "RoomController#running",
      "name": "running",
      "tags": "RoomController#running running",
      "summary": "",
      "description": "Is the room running."
    },
    "RoomController.html#usable": {
      "id": "RoomController.html#usable",
      "kind": "member",
      "title": "usable :boolean",
      "longname": "RoomController#usable",
      "name": "usable",
      "tags": "RoomController#usable usable",
      "summary": "",
      "description": "Is the instance still usable."
    },
    "RoomController.html#roomInfo": {
      "id": "RoomController.html#roomInfo",
      "kind": "member",
      "title": "roomInfo :object",
      "longname": "RoomController#roomInfo",
      "name": "roomInfo",
      "tags": "RoomController#roomInfo roomInfo",
      "summary": "",
      "description": "If room is running, contains its data (like e.g. roomInfo.roomLink). If not running, then this is null. Returns a copy of the original object."
    },
    "RoomController.html#openRoomLock": {
      "id": "RoomController.html#openRoomLock",
      "kind": "member",
      "title": "openRoomLock :boolean",
      "longname": "RoomController#openRoomLock",
      "name": "openRoomLock",
      "tags": "RoomController#openRoomLock openRoomLock",
      "summary": "",
      "description": "If opening of the room is in process, then this will be true."
    },
    "RoomController.html#plugins": {
      "id": "RoomController.html#plugins",
      "kind": "member",
      "title": "plugins :PluginController",
      "longname": "RoomController#plugins",
      "name": "plugins",
      "tags": "RoomController#plugins plugins",
      "summary": "",
      "description": "Object that can be used to control and get information about plugins. Requires the room to be running!"
    },
    "RoomController.html#repositories": {
      "id": "RoomController.html#repositories",
      "kind": "member",
      "title": "repositories :RepositoryController",
      "longname": "RoomController#repositories",
      "name": "repositories",
      "tags": "RoomController#repositories repositories",
      "summary": "",
      "description": "Object that can be used to control and get information about repositories."
    },
    "RoomController.html#init": {
      "id": "RoomController.html#init",
      "kind": "function",
      "title": "&lt;async&gt; init( [ opt ] )",
      "longname": "RoomController#init",
      "name": "init",
      "tags": "RoomController#init init",
      "summary": "",
      "description": "Initializes the RoomController so that it can be used. Navigates the page to the headless HaxBall URL and loads the Haxball Headless Manager library."
    },
    "RoomController.html#openRoom": {
      "id": "RoomController.html#openRoom",
      "kind": "function",
      "title": "&lt;async&gt; openRoom( config ) → {object}",
      "longname": "RoomController#openRoom",
      "name": "openRoom",
      "tags": "RoomController#openRoom openRoom",
      "summary": "",
      "description": "Opens a HaxBall room in a browser tab. On top of the documentated properties here, the config object can contain any properties you want to use in your own HHM config file. The config object is usable globally from within the HHM config as the hrConfig object."
    },
    "RoomController.html#closeRoom": {
      "id": "RoomController.html#closeRoom",
      "kind": "function",
      "title": "&lt;async&gt; closeRoom()",
      "longname": "RoomController#closeRoom",
      "name": "closeRoom",
      "tags": "RoomController#closeRoom closeRoom",
      "summary": "",
      "description": "Closes the headless HaxBall room by navigating the page out of the headless HaxBall URL."
    },
    "RoomController.html#callRoom": {
      "id": "RoomController.html#callRoom",
      "kind": "function",
      "title": "&lt;async&gt; callRoom( fn ) → {Promise.&lt;any&gt;}",
      "longname": "RoomController#callRoom",
      "name": "callRoom",
      "tags": "RoomController#callRoom callRoom",
      "summary": "",
      "description": "Calls a function of the HaxBall roomObject in the browsers context."
    },
    "RoomController.html#eval": {
      "id": "RoomController.html#eval",
      "kind": "function",
      "title": "&lt;async&gt; eval( pageFunction [, ...args ] ) → {Promise.&lt;Serializable&gt;}",
      "longname": "RoomController#eval",
      "name": "eval",
      "tags": "RoomController#eval eval",
      "summary": "",
      "description": "Wrapper for Puppeteers page.evaluate. Evaluates the given code in the browser tab room is running. You can access the HaxBall roomObject with HHM.manager.room. e.g. room.eval('HHM.manager.room.getPlayerList()');"
    },
    "module-haxroomie.html": {
      "id": "module-haxroomie.html",
      "kind": "module",
      "title": "haxroomie",
      "longname": "module:haxroomie",
      "name": "haxroomie",
      "tags": "module:haxroomie",
      "summary": "",
      "description": "Main module of Haxroomie. Can be obtained with const haxroomie = require('haxroomie');",
      "body": ""
    }
  }
};